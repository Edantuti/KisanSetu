"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { FarmerType, farmerSchema } from "@/utils/types";
import { createFarmerData } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
export function FarmerForm() {
  const router = useRouter();
  const form = useForm<FarmerType>({
    defaultValues: {
      phone_number: "",
    },
    resolver: zodResolver(farmerSchema),
  });
  const supabase = createClient();
  const onSubmit = async (data: FarmerType) => {
    const { error } = await createFarmerData(data);
    console.error(error);
    if (!error) {
      return router.push("/dashboard");
    }
  };
  async function getUser() {
    return await supabase.auth.getUser();
  }
  useEffect(() => {
    getUser().then(({ data }) => {
      if (data)
        form.resetField("phone_number", {
          defaultValue: `${data!.user!.phone}`,
        });
    });
  }, []);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name of the farmer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="father_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father Name</FormLabel>
              <FormControl>
                <Input placeholder="Farmer's Father Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date_of_birth"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
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
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    captionLayout="dropdown"
                    fromYear={1960}
                    toYear={new Date().getFullYear()}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aadhar_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aadhar Number</FormLabel>
              <FormControl>
                <Input placeholder="Farmer's Aadhar Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Farmer's Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
