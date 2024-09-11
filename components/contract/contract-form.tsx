"use client";
import { useForm, useFieldArray } from "react-hook-form";
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

export function ContractForm() {
  const form = useForm<ContractFormValues>({
    resolver: zodResolver(ContractSchema),
    defaultValues: {
      representative: "",
      total_value: 0,
      performance_criteria: "",
      payment_terms: "",
      clauses: [],
    },
  });

  const { control, handleSubmit } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "clauses",
  });

  const onSubmit = (data: ContractFormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-96 flex flex-col"
      >
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

        {/* Status */}
        <FormField
          control={control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Input placeholder="Status" {...field} />
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

        {/* Total Value */}
        <FormField
          control={control}
          name="total_value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Value</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Total Value" {...field} />
              </FormControl>
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
              <FormControl>
                <Textarea placeholder="Payment Terms" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contract Clauses */}
        <div className="flex flex-col gap-2">
          <FormLabel>Contract Clauses</FormLabel>
          {fields.map((item, index) => (
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
                          defaultValue={field.value || undefined}
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
                  onClick={() => remove(index)}
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
            onClick={() => append({ type: "monitor", description: "" })}
          >
            Add Clause
          </Button>
        </div>
        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
