import { getMonitorClauses, getUserStatus } from "@/app/actions";
import { MonitorContractChecker } from "@/components/contract/contract-checkbox";
import { ContractTimeline } from "@/components/contract/contract-timeline";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: clauses, error: clauses_error } = await getMonitorClauses(
    params.id,
  );
  const {
    data,

    error: statusError,
  } = await getUserStatus();
  const { data: Dates, error } = await createClient()
    .from("Contract")
    .select("start_date, end_date")
    .eq("id", params.id)
    .single();
  if (statusError) {
    return <>{JSON.stringify(statusError)}</>;
  }
  if (clauses_error) {
    return <>{JSON.stringify(clauses_error)}</>;
  }
  return (
    <section className="flex min-h-screen items-center justify-between">
      <ContractTimeline
        start_date={Dates!.start_date}
        end_date={Dates!.end_date}
        data={data!}
        clauses={clauses}
      />
      <section className=" w-full h-full">
        <MonitorContractChecker clauses={clauses} />
      </section>
    </section>
  );
}
