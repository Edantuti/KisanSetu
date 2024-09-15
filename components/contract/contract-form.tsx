"use client";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContractFormValues, ContractSchema } from "@/utils/types";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/utils/supabase/cn";
import ContractFarmerForm from "./contract-farmer-form";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { createContract } from "@/app/actions";

export function ContractForm() {
  const form = useForm<ContractFormValues>({
    resolver: zodResolver(ContractSchema),
    defaultValues: {
      name: "",
      description: "",
      representative: "",
      total_value: 0,
      performance_criteria: "",
      payment_terms: "",
      clauses: [],
      farmer: [
        {
          farmer_id: "",
          area: 0,
          crop: "",
          quantity: 0,
        },
      ],
    },
  });

  const [farmers, setFarmers] = useState<
    { user_id: string; name: string | null }[]
  >([]);
  const [selectedFarmers, setSelectedFarmers] = useState<
    { user_id: string; name: string | null }[]
  >([]);
  const [loading, setLoading] = useState(true);
  async function getFarmers() {
    return createClient().from("Farmer").select("user_id, name");
  }
  useEffect(() => {
    getFarmers()
      .then(({ data }) => {
        if (data) {
          setFarmers(data);
          setLoading(false);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const { control, handleSubmit } = form;
  const {
    fields: ClausesFields,
    append: ClausesAppend,
    remove: ClausesRemove,
  } = useFieldArray({
    control,
    name: "clauses",
  });

  const {
    fields: FarmersFields,
    append: FarmersAppend,
    remove: FarmersRemove,
  } = useFieldArray({
    control,
    name: "farmer",
  });
  const onSubmit = async (data: ContractFormValues) => {
    const { error } = await createContract(data);
    if (error) {
      console.error(error);
    }
  };
  function removeFarmerField(index: number) {
    const form_id = form.getValues().farmer[index].farmer_id;
    console.log(form_id);
    if (form_id) {
      setSelectedFarmers([
        ...selectedFarmers.filter((value) => value.user_id !== form_id),
      ]);
    }
    FarmersRemove(index);
  }
  //TODO: Need to select those farmers which have requested the buyer for the contract
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container mx-auto mt-8 p-6 rounded-xl shadow-lg"
      >
        <img
          src="https://picsum.photos/1200/400"
          alt="Contract Image"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <section className="p-6 mb-6 rounded-lg space-y-2">
          <h1 className="text-3xl font-bold mb-2">Contract</h1>
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contract Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name of the contract" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contract Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Representative */}
          <FormField
            control={control}
            name="representative"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Representative</FormLabel>
                <FormControl>
                  <Input placeholder="Representative" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Total Value */}
          <FormField
            control={control}
            name="total_value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Value</FormLabel>
                <FormControl>
                  <Input placeholder="Total Value" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Start Date */}
          <FormField
            control={control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          " pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      selected={field.value}
                      onSelect={field.onChange}
                      mode="single"
                      captionLayout="dropdown"
                      fromYear={2000}
                      toYear={2200}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Date */}
          <FormField
            control={control}
            name="end_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          " pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      selected={field.value}
                      onSelect={field.onChange}
                      mode="single"
                      captionLayout="dropdown"
                      fromYear={new Date().getFullYear()}
                      toYear={2200}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Performance Criteria */}
          <FormField
            control={control}
            name="performance_criteria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Performance Criteria</FormLabel>
                <FormControl>
                  <Textarea placeholder="Performance Criteria" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Payment Terms */}
          <FormField
            control={control}
            name="payment_terms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Terms</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Payment Terms" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yearly">Yearly</SelectItem>
                    <SelectItem value="half-yearly">Half Yearly</SelectItem>
                    <SelectItem value="quarterly">Quaterly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        {/*  <FormField
          control={control}
          name="farmer.farmer_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Farmer's List</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a farmer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {farmers.map(({ user_id, name }) => (
                    <SelectItem key={user_id} value={user_id}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <ContractFarmerForm form={form} /> */}
        {/* Contract Clauses */}
        <div className="">
          <FormLabel className="text-2xl mb-3">Contract Farmer(s)</FormLabel>
          {!loading &&
            FarmersFields.map((item, index) => (
              <div key={item.id} className="space-y-2">
                <ContractFarmerForm
                  form={form}
                  index={index}
                  selectedFarmers={selectedFarmers}
                  farmers={farmers}
                  setSelectedFarmers={setSelectedFarmers}
                />
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    removeFarmerField(index);
                  }}
                >
                  Remove Farmer
                </Button>
              </div>
            ))}
          <Button
            type="button"
            variant="secondary"
            onClick={() =>
              FarmersAppend({
                farmer_id: "",
                area: 0,
                crop: "",
                quantity: 0,
                quantity_metric: "",
              })
            }
          >
            Add Farmer
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <FormLabel className="text-2xl mb-3">Contract Clauses</FormLabel>
          {ClausesFields.map((item, index) => (
            <div key={item.id} className="space-y-2">
              {/* Clause Type */}
              <div className="flex gap-2 items-end">
                <FormField
                  control={control}
                  name={`clauses.${index}.type`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Clause Type</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monitor">Monitor</SelectItem>
                            <SelectItem value="condition">Condition</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => ClausesRemove(index)}
                >
                  Remove Clause
                </Button>
              </div>

              {/* Clause Description */}
              <FormField
                control={control}
                name={`clauses.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remove Clause Button */}
            </div>
          ))}

          {/* Add Clause Button */}
          <Button
            type="button"
            variant="secondary"
            onClick={() => ClausesAppend({ type: "monitor", description: "" })}
          >
            Add Clause
          </Button>
        </div>
        {/* Sealing Date */}
        <FormField
          control={control}
          name="sealing_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Sealing Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    selected={field.value}
                    onSelect={field.onChange}
                    mode="single"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        {!form.formState.isValid && <p>Something is wrong</p>}
        {JSON.stringify(form.formState.errors)}
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
