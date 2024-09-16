import { getContractByFarmerID } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Fragment } from "react";
import { Calendar, UserIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
export async function ContractFarmer() {
  const { data: FarmerContracts, error: FarmerContractError } =
    await getContractByFarmerID();
  if (FarmerContractError) {
    console.error(FarmerContractError);
  }
  return (
    <>
      {!FarmerContractError &&
        FarmerContracts.map((value) => (
          <Card key={value.name} className="w-96 dark:bg-gray-900 bg-gray-100">
            <CardHeader>
              <h1 className="text-2xl font-semibold capitalize">
                <Button
                  asChild
                  variant="link"
                  className="text-2xl font-semibold capitalize p-0"
                >
                  <Link href={`/dashboard/contract/${value.id}`}>
                    {" "}
                    {value.name}
                  </Link>
                </Button>
              </h1>
              <CardDescription className="line-clamp-2">
                {value.description}
              </CardDescription>
              <div className="flex gap-2 text-sm items-center">
                <Calendar />{" "}
                <p>
                  {new Date(value.start_date!).toDateString()} -{" "}
                  {new Date(value.end_date!).toDateString()}
                </p>
              </div>
              <Badge className="w-fit">{value.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-2">
              <UserDetails
                id={value.id}
                name={value.representative}
                type="Representative"
              />
              <h3 className="text-lg font-normal">Farmers</h3>
              <div>
                <UserDetails
                  id={value.farmer.id}
                  name={value.farmer.name}
                  type={"Farmer"}
                />
              </div>
            </CardContent>
          </Card>
        ))}
    </>
  );
}

export function UserDetails({
  id,
  name,
  type,
}: {
  id: string;
  name: string;
  type: string;
}) {
  return (
    <div key={id} className="flex items-center gap-3">
      {/*TODO: Icon display */}
      <UserIcon className="w-10 h-10 row-span-2 rounded-full border p-1" />

      <div className="">
        <p className="text-base font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{type}</p>
      </div>
    </div>
  );
}
// <Card key={value.id} className="w-96">
//   <CardHeader>
//     <CardTitle>Buyer Name: {value.buyer!.name}</CardTitle>
//     <div className="text-sm text-muted-foreground">
//       <p>Representative: {value.representative}</p>
//       <p>Payment Terms: {value.payment_terms}</p>
//       <p>Performance Criteria: {value.performance_criteria}</p>
//       <p>Start Date: {value.start_date}</p>
//       <p>Sealing Date: {value.sealing_date}</p>
//       <p>End Date: {value.end_date}</p>
//     </div>
//   </CardHeader>
//   <CardContent>
//     <Button asChild size="sm">
//       <Link href={`/dashboard/contract/monitor/${value.id}`}>
//         Monitor
//       </Link>
//     </Button>
//   </CardContent>
//   <CardFooter>
//     <div style={{ marginBottom: "10px" }}>
//       <strong>Farmer Information:</strong>
//       <p>Name: {value.farmer.name}</p>
//       <p>Phone Number: {value.farmer.phone_number}</p>
//       <p>Aadhar Number: {value.farmer.aadhar_number}</p>
//       <p>Father's Name: {value.farmer.father_name}</p>
//     </div>
//   </CardFooter>
// </Card>
