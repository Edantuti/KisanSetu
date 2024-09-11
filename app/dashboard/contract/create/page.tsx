import { getUserStatus } from "@/app/actions";
import { ContractForm } from "@/components/contract/contract-form";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <section className="min-h-[40rem] flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Contract Form</h1>
      <ContractForm />
    </section>
  );
}
