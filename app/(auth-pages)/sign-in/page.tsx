import { phoneAction, verifyOTP } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <p className="text-sm text-foreground">
        Don't have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Sign up
        </Link>
      </p>
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
  );
}
