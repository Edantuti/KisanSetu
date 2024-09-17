import { checkFirstCome } from "@/app/actions";
import { BuyerForm } from "@/components/onboarding/onboarding-buyer";
import { FarmerForm } from "@/components/onboarding/onboarding-farmer";
import { notFound, redirect } from "next/navigation";

export default async function Page({ params }: { params: { type: string } }) {
  if (params.type !== "farmer" && params.type !== "buyer") {
    return notFound();
  }
  const { response } = await checkFirstCome();
  if (!response) {
    return redirect("/dashboard");
  }
  return (
    <section className="min-h-[90vh] flex w-full items-center justify-center">
      {params.type === "farmer" && <FarmerForm />}
      {params.type === "buyer" && <BuyerForm />}
    </section>
  );
}
