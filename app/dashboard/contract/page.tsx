import {
  getContractByBuyersID,
  getContractByFarmerID,
  getUserStatus,
} from "@/app/actions";
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

export default async function Page() {
  const { data } = await getUserStatus();
  if (!data) {
    return redirect("/onboarding");
  }
  const { data: BuyerContracts, error: BuyerContractError } =
    await getContractByBuyersID();
  const { data: FarmerContracts, error: FarmerContractError } =
    await getContractByFarmerID();
  const { data: BuyersDetails, error: BuyersError } = await createClient()
    .from("Buyers")
    .select()
    .eq("user_id", data?.userid)
    .single();
  if (FarmerContractError) {
    console.error(FarmerContractError);
  }
  if (BuyerContractError) {
    console.error(BuyerContractError);
  }
  //TODO: Converting it into two individual components
  return (
    <section className="min-h-[40rem]">
      {data?.status === "buyer" && (
        <>
          <Button asChild>
            <Link href="/dashboard/contract/create">Create New Contract</Link>
          </Button>
          <div>
            {!BuyerContractError &&
              BuyerContracts.map((value) => (
                <Card key={value.id} className="w-96">
                  <CardHeader>
                    <CardTitle>
                      Buyer Name: {!BuyersError && BuyersDetails.name}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <p>Representative: {value.representative}</p>
                      <p>Payment Terms: {value.payment_terms}</p>
                      <p>Performance Criteria: {value.performance_criteria}</p>
                      <p>Start Date: {value.start_date}</p>
                      <p>Sealing Date: {value.sealing_date}</p>
                      <p>End Date: {value.end_date}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild>
                      <Link href={`/dashboard/contract/${value.id}`}>
                        Monitor
                      </Link>
                    </Button>
                    {value.Clauses.map((clause) => (
                      <Fragment key={clause.id}>
                        <p>Clause Type: {clause.type}</p>
                        <p>Description: {clause.description}</p>
                      </Fragment>
                    ))}
                  </CardContent>
                  <CardFooter>
                    {value.ContractFarmer.map(({ Farmer: farmer }) => (
                      <Fragment key={farmer!.id}>
                        <div style={{ marginBottom: "10px" }}>
                          <strong>Farmer Information:</strong>
                          <p>Name: {farmer!.name}</p>
                          <p>Phone Number: {farmer!.phone_number}</p>
                          <p>Aadhar Number: {farmer!.aadhar_number}</p>
                          <p>Father's Name: {farmer!.father_name}</p>
                        </div>
                      </Fragment>
                    ))}
                  </CardFooter>
                </Card>
              ))}
          </div>
        </>
      )}
      {data?.status === "farmer" && (
        <div>
          {!FarmerContractError &&
            FarmerContracts.map((value) => (
              <Card key={value.id} className="w-96">
                <CardHeader>
                  <CardTitle>Buyer Name: {value.buyer!.name}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    <p>Representative: {value.representative}</p>
                    <p>Payment Terms: {value.payment_terms}</p>
                    <p>Performance Criteria: {value.performance_criteria}</p>
                    <p>Start Date: {value.start_date}</p>
                    <p>Sealing Date: {value.sealing_date}</p>
                    <p>End Date: {value.end_date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link href={`/dashboard/contract/${value.id}`}>
                      Monitor
                    </Link>
                  </Button>
                </CardContent>
                <CardFooter>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Farmer Information:</strong>
                    <p>Name: {value.farmer.name}</p>
                    <p>Phone Number: {value.farmer.phone_number}</p>
                    <p>Aadhar Number: {value.farmer.aadhar_number}</p>
                    <p>Father's Name: {value.farmer.father_name}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
      )}
    </section>
  );
}
