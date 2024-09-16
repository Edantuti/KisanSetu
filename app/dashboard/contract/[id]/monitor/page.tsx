import { getMonitorClauses, getUserStatus } from "@/app/actions";
import { ContractTimeline } from "@/components/contract/contract-timeline";
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
    <section className="flex min-h-screen items-center justify-center">
      <ContractTimeline
        start_date={Dates!.start_date}
        end_date={Dates!.end_date}
        data={data!}
        clauses={clauses}
      />
    </section>
  );
}
