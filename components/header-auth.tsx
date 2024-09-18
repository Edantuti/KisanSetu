import { getUserStatus, signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { StatusIndicator } from "./status-indicator";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <StatusIndicator userId={user.id} />
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"} className="bg-[#c79370]">
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2 bg-[#a0806b] rounded-md">
      <Button
        asChild
        size="sm"
        className="bg-[#a0806b] rounded-md text-black hover:text-white"
      >
        <Link href="/sign-in">Sign in</Link>
      </Button>
    </div>
  );
}
