import { getMonitorClauses, getUserStatus } from "@/app/actions";
import { CheckboxContractClauses } from "@/components/contract/contract-checkbox";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: clauses, error: clauses_error } = await getMonitorClauses(
    params.id,
  );
  const {
    data,

    error: statusError,
  } = await getUserStatus();
  if (statusError) {
    return <>{JSON.stringify(statusError)}</>;
  }
  if (clauses_error) {
    return <>{JSON.stringify(clauses_error)}</>;
  }
  return (
    <section>
      {clauses.map(({ description, MonitorClauses }) => (
        <CheckboxContractClauses
          key={MonitorClauses[0].clauses_id!}
          type={data!.status}
          data={MonitorClauses[0]}
          description={description!}
        />
      ))}
    </section>
  );
}
