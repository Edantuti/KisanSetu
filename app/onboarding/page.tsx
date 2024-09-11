import { OnBoardingForm } from "@/components/onboarding-form";
import { checkFirstCome } from "../actions";
import { redirect } from "next/navigation";

export default async function Page() {
  const { response } = await checkFirstCome();
  if (!response) {
    return redirect("/dashboard");
  }
  return (
    <section>
      <OnBoardingForm />
    </section>
  );
}
