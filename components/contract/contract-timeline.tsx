"use client";
import { CheckboxContractClauses } from "@/components/contract/contract-checkbox";
import { Timeline } from "@mantine/core";
export function ContractTimeline({
  start_date,
  clauses,
  data,
  end_date,
}: {
  start_date: string;
  clauses: {
    description: string | null;
    MonitorClauses: {
      clauses_id: string;
      contractor: boolean;
      contractor_marked: string | null;
      farmer: boolean;
      farmer_marked: string | null;
      id: string;
    }[];
  }[];
  data: {
    created_at: string;
    id: string;
    status: "farmer" | "buyer";
    userid: string;
  };
  end_date: string;
}) {
  return (
    <Timeline className="w-96" bulletSize={24} lineWidth={2}>
      <Timeline.Item>
        <h1 className="text-2xl font-semibold">
          Beginning - {new Date(start_date).toDateString()}
        </h1>
      </Timeline.Item>
      {clauses.map(({ description, MonitorClauses }, index) => (
        <Timeline.Item key={MonitorClauses[0].clauses_id!}>
          <CheckboxContractClauses
            type={data.status}
            data={MonitorClauses[0]}
            description={description!}
          />
        </Timeline.Item>
      ))}
      <Timeline.Item>
        <h1 className="text-2xl font-semibold">
          End - {new Date(end_date).toDateString()}
        </h1>
      </Timeline.Item>
    </Timeline>
  );
}
