import { getContractbyID } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

//TODO: Generating PDF on click

export default async function Page({ params }: { params: { id: string } }) {
  const { data, error } = await getContractbyID(params.id);
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  return (
    <section className="container mx-auto mt-8 p-6 rounded-xl shadow-lg">
      <img
        src="https://picsum.photos/1200/400"
        alt="Contract Image"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <section className="p-6 mb-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Contract</h1>
        <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
        <p className="">{data.description}</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Representative</h3>
          <p className="">{data.representative}</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Total Value</h3>
          <p className="">{data.total_value}</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Performance Criteria</h3>
          <p className="">{data.performance_criteria}</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Payment Terms</h3>
          <p className="">{data.payment_terms}</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Starting Date</h3>
          <p className="">{new Date(data.start_date!).toDateString()}</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Ending Date</h3>
          <p className="">{new Date(data.end_date!).toDateString()}</p>
        </div>
      </section>
      <section className="p-6 rounded-lg mb-6">
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
      <section className="p-6 rounded-lg mb-6">
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
              <p className="">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Print</Button>
        <Button variant="outline">Download PDF</Button>
      </div>
    </section>
  );
}
