import { getUserStatus } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const { data } = await getUserStatus();
  return (
    <section className="min-h-[40rem]">
      {data?.status === "buyer" && (
        <Button asChild>
          <Link href="/dashboard/contract/create">Create New Contract</Link>
        </Button>
      )}
    </section>
  );
}
