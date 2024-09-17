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
  name: z.string().min(1, "Name is Required"),
  gstin: z.string().min(1, "GSTIN is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  pincode: z.string().min(6, "Pincode should be 6 digits"),
});

export const ContractClauseSchema = z.object({
  type: z.string(),
  description: z.string(),
});
export const FarmSchema = z.object({
  area: z.number(),
  soil_type: z.string().min(1, "Soil type not mentioned"),
  irrigation: z.boolean(),
  irrigation_type: z.string(),
  water_source: z.string(),
  crop_rotation: z.boolean(),
  current_crop: z.string(),
  previous_crop: z.string(),
  organic_certified: z.boolean(),
  pest_control: z.string(),
  farm_equipment: z.string(),
});
export const FarmerContractSchema = z.object({
  farmer_id: z.string(),
  area: z.coerce.number(),
  crop: z.string(),
  quantity: z.coerce.number(),
  quantity_metric: z.string(),
});
export const ContractSchema = z.object({
  name: z.string(),
  description: z.string(),
  representative: z.string(),
  start_date: z.date(),
  end_date: z.date(),
  sealing_date: z.date(),
  total_value: z.coerce.number(),
  performance_criteria: z.string(),
  payment_terms: z.string(),
  clauses: z.array(ContractClauseSchema).optional(),
  farmer: z.array(FarmerContractSchema).min(1, "One Farmer required"),
});
export type FarmType = z.infer<typeof FarmSchema>;
export type ContractFormValues = z.infer<typeof ContractSchema>;
export type FarmerType = z.infer<typeof farmerSchema>;
export type BuyerType = z.infer<typeof buyerSchema>;
