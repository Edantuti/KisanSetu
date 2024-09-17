import { BuyerType, FarmerType } from "@/utils/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Banknote, CarTaxiFront, LocateIcon, Mail, User } from "lucide-react";
import { DetailComponent } from "./farmer-details";

export function BuyerDetails({ data }: { data: BuyerType }) {
  return (
    <Card className="p-24">
      <CardHeader>
        <h1 className="text-4xl font-bold">Buyer Details</h1>
      </CardHeader>
      <CardContent className="space-y-2">
        <DetailComponent
          Icon={<User className="row-span-2 size-10 rounded-full border p-2" />}
          type="Name"
          detail={data.name}
        />
        <DetailComponent
          Icon={
            <Banknote className="row-span-2 size-10 rounded-full border p-2" />
          }
          type="GSTIN"
          detail={data.gstin}
        />
        <DetailComponent
          Icon={<Mail className="row-span-2 size-10 rounded-full border p-2" />}
          type="Email"
          detail={data.email}
        />
        <DetailComponent
          Icon={
            <LocateIcon className="row-span-2 size-10 rounded-full border p-2" />
          }
          type="Address"
          detail={data.address}
        />
        <DetailComponent
          Icon={
            <LocateIcon className="row-span-2 size-10 rounded-full border p-2" />
          }
          type="District"
          detail={data.district}
        />
        <DetailComponent
          Icon={
            <LocateIcon className="row-span-2 size-10 rounded-full border p-2" />
          }
          type="PinCode"
          detail={data.pincode}
        />
      </CardContent>
    </Card>
  );
}
