import { getUserStatus } from "@/app/actions";
import { ContractBuyer } from "@/components/contract/contract-buyer";
import { ContractFarmer } from "@/components/contract/contract-farmer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const { data } = await getUserStatus();
  //TODO: Converting it into two individual components
  return (
    <section className="min-h-[50rem] m-10">
      <h1 className="text-2xl font-semibold py-2">Contracts</h1>
      <div className="flex gap-2">
        {data?.status === "buyer" && <ContractBuyer />}
        {data?.status === "farmer" && <ContractFarmer />}
        {data?.status === "buyer" && (
          <Button asChild className="w-96 h-full" variant={"outline"}>
            <Link href="/dashboard/contract/create">New Contracts +</Link>
          </Button>
        )}
      </div>
    </section>
  );
}
