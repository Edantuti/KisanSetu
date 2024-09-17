import { redirect } from "next/navigation";
import { getContractByBuyersID, getUserInfo, getUserStatus } from "../actions";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BuyerDetails } from "@/components/details/buyer-details";
import { FarmerDetails } from "@/components/details/farmer-details";

export default async function Page() {
  const { data: userStatus, error: userStatusError } = await getUserStatus();
  if (!userStatus) {
    return redirect("/onboarding");
  }
  return (
    <section className="min-h-[60rem] flex items-center justify-center">
      {userStatus.status === "buyer" && (
        <BuyerDetails
          data={{
            state: "Andhra Pradesh",
            name: "Edan Solomon Tuti",
            gstin: "29u492750824093874",
            email: "edansolomontuti@gmail.com",
            address: "Qtr-515/B/Sector-11",
            district: "Visakhapatnam",
            pincode: "530032",
          }}
        />
      )}
      {userStatus.status === "farmer" && (
        <FarmerDetails
          data={{
            name: "Edan Solomon Tuti",
            father_name: "Jagarnath Munda",
            date_of_birth: new Date(),
            aadhar_number: "555566665555",
            phone_number: "+918330944117",
          }}
        />
      )}
    </section>
  );
}
