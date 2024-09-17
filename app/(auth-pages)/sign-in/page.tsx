import { phoneAction, verifyOTP } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    // <form className=" flex flex-col  outline w-[30%] px-10 py-10 rounded-lg" >
    <>
    <div className="fixed  bg-opacity-60 backdrop-blur-sm "></div>
<form className="relative flex flex-col  backdrop-blur-xl backdrop:bg-slate-600 w-[30%] px-10 py-10 rounded-lg shadow-lg text-white/70 shadow-slate-600">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        {searchParams.type !== "success" ? (
          <>
            <Label htmlFor="phone">Phone Number</Label>
            <Input name="phone" placeholder="+91xxxxxxxxxx" required />
            <SubmitButton pendingText="Signing In..." formAction={phoneAction}>
              Sign in
            </SubmitButton>
          </>
        ) : (
          <>
            <Label htmlFor="otp">OTP</Label>
            <Input name="otp" placeholder="xxxxxx" defaultValue="" />
            <SubmitButton
              pendingText="Signing In..."
              formAction={async (formData: FormData) => {
                "use server";
                if (searchParams.phone) {
                  await verifyOTP(formData, searchParams?.phone);
                }
              }}
            >
              Sign in
            </SubmitButton>
          </>
        )}
        <FormMessage message={searchParams} />
      </div>
    </form>
    </>
  );
}
