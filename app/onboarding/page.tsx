import { checkFirstCome } from "@/app/actions";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/server";
export default async function Page() {
  const {
    data: { user },
  } = await createClient().auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const { response } = await checkFirstCome();
  if (!response) {
    return redirect("/dashboard");
  }
  return (
    <section className="min-h-[40rem] flex flex-col w-full gap-4 items-center justify-center">
      <Button asChild>
        <Link href="/onboarding/farmer">Join as Farmer</Link>
      </Button>
      <Separator />
      <Button asChild>
        <Link href="/onboarding/buyer">Join as Buyer</Link>
      </Button>
    </section>
  );
}
