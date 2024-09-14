import { ContractFormValues } from "@/utils/types";
import { UseFormStateProps } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ContractFarmerForm({
  form,
}: {
  form: UseFormStateProps<ContractFormValues>;
}) {
  const { control } = form;
  const [units, setUnits] = useState<{ id: number; unit: string }[]>([]);
  async function getUnits() {
    return createClient().from("Metrics").select("id, unit");
  }

  useEffect(() => {
    getUnits()
      .then(({ data }) => {
        if (data) setUnits(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <FormField
        control={control}
        name="farmer.area"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Farmer's Area Contributed</FormLabel>
            <FormControl>
              <Input placeholder="Farmer Area" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="farmer.crop"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Farmer's Crop</FormLabel>
            <FormControl>
              <Input placeholder="Farmer Crop" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="farmer.quantity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Farmer's Quantity to be contributed</FormLabel>
            <FormControl>
              <Input placeholder="quantity" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="farmer.quantity_metric"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantity Metric</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select the metric" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {units.map(({ id, unit }) => (
                  <SelectItem key={id} value={id.toString()}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
