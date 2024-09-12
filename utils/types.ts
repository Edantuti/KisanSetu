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

export const ContractClauseSchema = z.object({
  type: z.enum(["monitor", "condition", "others"]),
  description: z.string(),
});

export const ContractSchema = z.object({
  representative: z.string(),
  status: z.string(),
  start_date: z.date(),
  end_date: z.date(),
  sealing_date: z.date(),
  total_value: z.number().int(),
  performance_criteria: z.string(),
  payment_terms: z.string(),
  clauses: z.array(ContractClauseSchema).optional(),
});

export type ContractFormValues = z.infer<typeof ContractSchema>;
export type FarmerType = z.infer<typeof farmerSchema>;
export type BuyerType = z.infer<typeof buyerSchema>;
