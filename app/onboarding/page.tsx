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
    <section className="h-[90vh] flex w-full">
      <div className="bg-yellow-400 h-full w-[50%] flex justify-center items-end backdrop-blur-sm pb-20"
      style={{background: 'url("/images/far.jpg")', backgroundSize: 'cover',backgroundRepeat:'no-repeat' }}
      >
        {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
      <Button asChild className=" text-2xl p-8">
        <Link href="/onboarding/farmer">Join as Farmer</Link>
      </Button>
      </div>
      <div className="bg-yellow-400 h-full w-[50%] flex justify-center items-end pb-20"
      style={{background: 'url("/images/buyer.jpg")', backgroundSize: 'cover',backgroundRepeat:'no-repeat' }}
      >
      <Button asChild className=" text-2xl p-8">
        <Link href="/onboarding/buyer">Join as Buyer</Link>
      </Button>
      </div>
      
      {/* <Separator /> */}
      
    </section>
  );
}
