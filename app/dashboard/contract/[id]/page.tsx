import { getContractbyID } from "@/app/actions";
import ContractAnalysisTable from "@/components/contract/contract-analysis";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ContractAttribtues } from "@/components/contract/contract-display";

//TODO: Generating PDF on click

export default async function Page({ params }: { params: { id: string } }) {
  const { data, error } = await getContractbyID(params.id);
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  return (
    <section className="container mx-auto mt-8 p-6 rounded-xl shadow-lg">
      <Image
        src="/images/contract/contract.jpg"
        alt="Contract Image"
        width="1200"
        height="400"
        className="w-full h-fit object-cover rounded-lg mb-6"
      />

      <section className="p-6 mb-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Contract</h1>
        <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
        <p className="">{data.description}</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <ContractAttribtues type="Representative" data={data.representative} />
        <ContractAttribtues
          type="Total Value"
          data={data.total_value!.toString()}
        />
        <ContractAttribtues
          type="Performance Criteria"
          data={data.performance_criteria!}
        />
        <ContractAttribtues type="Payment Terms" data={data.payment_terms!} />
        <ContractAttribtues
          type="Starting Date"
          data={new Date(data.start_date!).toDateString()}
        />
        <ContractAttribtues
          type="Ending Date"
          data={new Date(data.end_date!).toDateString()}
        />
      </section>
      <section className="p-6 rounded-lg mb-6 border border-solid border-neutral-300">
        <h2 className="text-2xl font-bold mb-4">Participating Farmers</h2>
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="p-2">Farmer</th>
              <th className="p-2">Area</th>
              <th className="p-2">Crop</th>
              <th className="p-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.ContractFarmer.map((value) => (
              <tr key={value.Farmer!.id} className="">
                <td className="p-2">{value.Farmer!.name} </td>
                <td className="p-2">{value.area} acres </td>
                <td className="p-2">{value.crop} </td>
                <td className="p-2">
                  {value.quantity} {value.Metrics?.unit}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="p-6 rounded-lg mb-6  border border-solid border-neutral-300">
        <h2 className="text-2xl font-bold">Contract Clauses</h2>
        <div className="space-y-4">
          {data.Clauses.map((value) => (
            <div key={value.id} className="p-4 rounded-md">
              {value.type === "monitor" && (
                <Badge className="bg-blue-600 mb-2">Monitor</Badge>
              )}
              {value.type === "others" && (
                <Badge className="bg-yellow-600 mb-2">Other</Badge>
              )}
              {value.type === "condition" && (
                <Badge className="bg-teal-600 mb-2">Conditional</Badge>
              )}
              {value.type === "termination" && (
                <Badge className="bg-red-600 mb-2">Termination</Badge>
              )}
              {value.type === "dispute" && (
                <Badge className="bg-green-600 mb-2">
                  Dispute settlement methods
                </Badge>
              )}
              <p className="">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <ContractAnalysisTable />
      <div className="flex justify-end space-x-4">
        <Button variant="outline" className="bg-black text-white" asChild>
          <Link href={`/dashboard/contract/${params.id}/monitor`}>
            Check Monitor Clauses
          </Link>
        </Button>
        <Button asChild variant="outline" className="bg-black text-white">
          <Link href={`/dashboard/contract/${params.id}/print`}>
            Download PDF
          </Link>
        </Button>
        <Button asChild variant="outline" className="bg-black text-white">
          <Link href={`/dashboard/contract/`}>
            Continue for Digital Signature And E-Stamping
          </Link>
        </Button>
      </div>
    </section>
  );
}
