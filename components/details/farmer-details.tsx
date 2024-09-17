import { FarmerType } from "@/utils/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CalendarX, Phone, User } from "lucide-react";
import { ReactNode } from "react";

export function FarmerDetails({ data }: { data: FarmerType }) {
  return (
    <Card className=" shadow-md p-32">
      <CardHeader>
        <h1 className="text-4xl font-bold">Farmer Details</h1>
      </CardHeader>
      <CardContent className="space-y-2 text-2xl">
        <DetailComponent
          Icon={
            <User className="row-span-2 size-10 rounded-full border p-2 overflow-visible" />
          }
          type="Name"
          detail={data.name}
        />
        <DetailComponent
          Icon={
            <User className="row-span-2 size-10 rounded-full border p-2 overflow-visible" />
          }
          type="Father name"
          detail={data.father_name}
        />
        <DetailComponent
          Icon={
            <Phone className="row-span-2 size-10 rounded-full border p-2 overflow-visible" />
          }
          type="Phone Number"
          detail={data.phone_number}
        />

        <DetailComponent
          Icon={
            <CalendarX className="row-span-2 size-10 rounded-full border p-2 overflow-visible" />
          }
          type={"Date of Birth"}
          detail={data.date_of_birth.toDateString()}
        />
        <DetailComponent
          Icon={
            <CalendarX className="row-span-2 size-10 rounded-full border p-2 overflow-visible" />
          }
          type={"Aadhar Number"}
          detail={data.aadhar_number}
        />
      </CardContent>
    </Card>
  );
}

export function DetailComponent({
  Icon,
  type,
  detail,
}: {
  Icon: ReactNode;
  type: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-4">
      {Icon}
      <div>
        <h2 className="text-xl font-semibold">{type}</h2>
        <p className="text-lg"> {detail}</p>
      </div>
    </div>
  );
}
