import { z } from "zod";
export const farmerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  father_name: z.string().min(1, "Father's Name is required"),
  date_of_birth: z.date({
    required_error: "Date of Birth is required.",
  }),
  aadhar_number: z
    .string()
    .min(12, "Aadhar Number should be 12 digits")
    .max(12, "Aadhar Number should be 12 digits"),
  phone_number: z.string().min(10, "Phone Number should be 10 digits"),
});
export const buyerSchema = z.object({
  gstin: z.string().min(1, "GSTIN is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  pincode: z.string().min(6, "Pincode should be 6 digits"),
});

export type FarmerType = z.infer<typeof farmerSchema>;
export type BuyerType = z.infer<typeof buyerSchema>;
