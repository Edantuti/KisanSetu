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
import { getContractByBuyersID, getUserStatus } from "@/app/actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Fragment } from "react";
import { Calendar, UserIcon } from "lucide-react";
import { UserDetails } from "./contract-farmer";
import { Badge } from "../ui/badge";
export async function ContractBuyer() {
  const { data } = await getUserStatus();
  const { data: BuyerContracts, error: BuyerContractError } =
    await getContractByBuyersID();
  if (!data) {
    return redirect("/onboarding");
  }
  if (BuyerContractError) {
    console.error(BuyerContractError);
  }
  const { data: BuyersDetails, error: BuyersError } = await createClient()
    .from("Buyers")
    .select()
    .eq("user_id", data?.userid)
    .single();
  return (
    <>
      {!BuyerContractError &&
        BuyerContracts.map((value) => (
          <Card key={value.id} className="w-96 bg-gray-900">
            <CardHeader className="space-y-2">
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
                {value.ContractFarmer.map(({ Farmer }) => (
                  <UserDetails
                    id={Farmer!.id}
                    name={Farmer!.name}
                    type="Farmer"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
    </>
  );
}

// <>
//   <div>
//     {!BuyerContractError &&
//       BuyerContracts.map((value) => (
//         <Card key={value.id} className="w-96">
//           <CardHeader>
//             <CardTitle>
//               Buyer Name: {!BuyersError && BuyersDetails.name}
//             </CardTitle>
//             <div className="text-sm text-muted-foreground">
//               <p>Representative: {value.representative}</p>
//               <p>Payment Terms: {value.payment_terms}</p>
//               <p>Performance Criteria: {value.performance_criteria}</p>
//               <p>Start Date: {value.start_date}</p>
//               <p>Sealing Date: {value.sealing_date}</p>
//               <p>End Date: {value.end_date}</p>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <Button asChild size="sm">
//               <Link href={`/dashboard/contract/monitor/${value.id}`}>
//                 Monitor
//               </Link>
//             </Button>
//             {value.Clauses.map((clause) => (
//               <Fragment key={clause.id}>
//                 <p>Clause Type: {clause.type}</p>
//                 <p>Description: {clause.description}</p>
//               </Fragment>
//             ))}
//           </CardContent>
//           <CardFooter>
//             {value.ContractFarmer.map(({ Farmer: farmer }) => (
//               <Fragment key={farmer!.id}>
//                 <div style={{ marginBottom: "10px" }}>
//                   <strong>Farmer Information:</strong>
//                   <p>Name: {farmer!.name}</p>
//                   <p>Phone Number: {farmer!.phone_number}</p>
//                   <p>Aadhar Number: {farmer!.aadhar_number}</p>
//                   <p>Father's Name: {farmer!.father_name}</p>
//                 </div>
//               </Fragment>
//             ))}
//           </CardFooter>
//         </Card>
//       ))}
//   </div>
// </>
