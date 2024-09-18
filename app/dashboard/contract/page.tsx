import { getUserStatus } from "@/app/actions";
import { ContractBuyer } from "@/components/contract/contract-buyer";
import { ContractFarmer } from "@/components/contract/contract-farmer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const { data } = await getUserStatus();
  //TODO: Converting it into two individual components
  return (
    <section className="min-h-[50rem] p-10 bg-[#f4d8bf] -z-10" >
      <div style={{

// backgroundPosition: 'center 70px', 
// backgroundRepeat: 'no-repeat',
  filter: 'brightness(70%)',
}}>
      <h1 className="text-4xl mb-10 text-center font-semibold py-2 mt-20 ">Contracts</h1>
      <div className="flex gap-2 ">
        {data?.status === "buyer" && <ContractBuyer />}
        {data?.status === "farmer" && <ContractFarmer />}
        {data?.status === "buyer" && (
          <Button asChild className="w-96 h-full bg-[#e18e41] bg-opacity-55 backdrop-blur-md rounded-lg shadow-lg shadow-[#cb8f56] transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#c08854] hover:bg-opacity-30" variant={"outline"}>
            <Link href="/dashboard/contract/create">New Contracts +</Link>
          </Button>
        )}
      </div>
      </div>
    </section>
  );
}
