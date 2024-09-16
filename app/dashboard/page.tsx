import { redirect } from "next/navigation";
import { getContractByBuyersID, getUserInfo, getUserStatus } from "../actions";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const { data: userStatus, error: userStatusError } = await getUserStatus();
  if (!userStatus) {
    return redirect("/onboarding");
  }
  const { data, error } = await createClient().from("Buyers").select();
  return (
    <section className="min-h-[40rem]">
      {data &&
        data.map((value) => {
          //TODO: Request adding feature, with all the land other such details
          return <p key={value.id}>Buyer:{value.name}</p>;
        })}
      <Button asChild size="sm">
        <Link href={"/dashboard/contract"}>Contract</Link>
      </Button>
    </section>
  );
}
