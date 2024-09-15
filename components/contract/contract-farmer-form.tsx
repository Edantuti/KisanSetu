import { ContractFormValues } from "@/utils/types";
import { UseFormReturn, UseFormStateProps, useWatch } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "../ui/form";
import { Input } from "../ui/input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

export default function ContractFarmerForm({
  form,
  index,
  farmers,
  selectedFarmers,
  setSelectedFarmers,
}: {
  form: UseFormReturn<ContractFormValues>;
  index: number;
  farmers: { user_id: string; name: string | null }[];
  selectedFarmers: { user_id: string; name: string | null }[];
  setSelectedFarmers: Dispatch<
    SetStateAction<{ user_id: string; name: string | null }[]>
  >;
}) {
  const { control } = form;
  const [units, setUnits] = useState<{ id: number; unit: string }[]>([]);
  async function getUnits() {
    return createClient().from("Metrics").select("id, unit");
  }
  const watch = useWatch({ control, name: `farmer.${index}.farmer_id` });
  useEffect(() => {
    getUnits()
      .then(({ data }) => {
        if (data) setUnits(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    setSelectedFarmers([
      ...selectedFarmers,
      ...farmers.filter((value) => value.user_id === watch),
    ]);
  }, [watch]);
  function removeSelectedFarmer() {
    setSelectedFarmers([
      ...selectedFarmers.filter(
        (value) => value.user_id !== form.getValues().farmer[index].farmer_id,
      ),
    ]);
    form.setValue(`farmer.${index}.farmer_id`, "");
  }
  return (
    <>
      <div className="flex gap-2">
        <FormField
          control={control}
          name={`farmer.${index}.farmer_id`}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Select a Farmer</FormLabel>
              {!form.getValues().farmer[index].farmer_id ? (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Farmer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {farmers.filter(
                      (value) => !selectedFarmers.includes(value),
                    ) &&
                      farmers
                        .filter((value) => !selectedFarmers.includes(value))
                        .map((value) => (
                          <SelectItem key={value.user_id} value={value.user_id}>
                            {value.name}
                          </SelectItem>
                        ))}
                  </SelectContent>
                </Select>
              ) : (
                <div className="flex gap-2">
                  <p>
                    {selectedFarmers.filter(
                      (value) =>
                        value.user_id ===
                        form.getValues().farmer[index].farmer_id,
                    )[0] &&
                      selectedFarmers.filter(
                        (value) =>
                          value.user_id ===
                          form.getValues().farmer[index].farmer_id,
                      )[0].name}
                  </p>
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => {
                      removeSelectedFarmer();
                    }}
                  >
                    Remove
                  </Button>
                </div>
              )}

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`farmer.${index}.area`}
          render={({ field }) => (
            <FormItem className="w-full">
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
          name={`farmer.${index}.crop`}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Farmer's Crop</FormLabel>
              <FormControl>
                <Input placeholder="Farmer Crop" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name={`farmer.${index}.quantity`}
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
        name={`farmer.${index}.quantity_metric`}
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
