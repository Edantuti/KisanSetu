import { redirect } from "next/navigation";
import {
  getContractByBuyersID,
  getUserDetails,
  getUserInfo,
  getUserStatus,
} from "../actions";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BuyerDetails } from "@/components/details/buyer-details";
import { FarmerDetails } from "@/components/details/farmer-details";

export default async function Page() {
  const { data: userStatus, error: userError } = await getUserStatus();
  if (!userStatus) {
    return redirect("/onboarding");
  }
  const details = await getUserDetails();
  if (!details) {
    return redirect("/onboarding");
  }
  return (
    <section className="min-h-[60rem] flex items-center justify-center">
      {userStatus.status === "buyer" && (
        <BuyerDetails
          data={{
            state: details.address,
            name: details.name,
            gstin: details.gstin,
            email: details.email,
            address: details.address,
            district: details.district,
            pincode: details.pincode,
          }}
        />
      )}
      {userStatus.status === "farmer" && (
        <FarmerDetails
          data={{
            name: details.name,
            father_name: details.father_name,
            date_of_birth: new Date(details.date_of_birth),
            aadhar_number: details.aadhar_number,
            phone_number: details.phone_number,
          }}
        />
      )}
      <Button asChild>
        <Link href="/dashboard/contract">Contract</Link>
      </Button>
    </section>
  );
}
