"use client";
import { CheckboxContractClauses } from "@/components/contract/contract-checkbox";
import { Timeline } from "@mantine/core";
import { ReactNode } from "react";
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
  const dates = ["2024-05-20", "2024-06-21", "2024-07-21"];
  return (
    <div className="w-[30rem] ml-auto">
      <ContractTimelineComponent
        time={new Date(start_date).toDateString()}
        Component={
          <>
            <h1 className="text-2xl font-semibold">Beginning</h1>
          </>
        }
      />
      {clauses.map(({ description, MonitorClauses }, index) => (
        <ContractTimelineComponent
          key={description}
          time={new Date(dates[index]).toDateString()}
          Component={
            <CheckboxContractClauses
              type={data.status}
              data={MonitorClauses[0]}
              description={description!}
            />
          }
        />
      ))}
      <ContractTimelineComponent
        time={new Date(end_date).toDateString()}
        Component={
          <>
            <h1 className="text-2xl font-semibold">End</h1>
          </>
        }
      />
    </div>
  );
}
export function ContractTimelineComponent({
  time,
  Component,
}: {
  time: string;
  Component: ReactNode;
}) {
  return (
    <div className="flex gap-x-3">
      <div className="w-16 text-end">
        <span className="text-xs text-gray-500 dark:text-neutral-400">
          {time}
        </span>
      </div>

      <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#d9b18b] dark:after:bg-neutral-700">
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full bg-[#d9b18b] dark:bg-neutral-600"></div>
        </div>
      </div>

      <div className="grow pt-0.5 pb-8">{Component}</div>
    </div>
  );
}
// <h1 classNameName="text-2xl font-semibold">
//   Beginning - {new Date(start_date).toDateString()}
// </h1>
// {clauses.map(({ description, MonitorClauses }, index) => (
//   <CheckboxContractClauses
//     key={description}
//     type={data.status}
//     data={MonitorClauses[0]}
//     description={description!}
//   />
// ))}
// <h1 classNameName="text-2xl font-semibold">
//   End - {new Date(end_date).toDateString()}
// </h1>
