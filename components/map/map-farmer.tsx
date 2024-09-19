"use client";

import { Dispatch, SetStateAction } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useLocation } from "./map-provider";
import { MapNearValue } from "./map-change";

export function MapFarm() {
  const { location, setLocation } = useLocation();
  return (
    <div className="w-96 h-full border border-solid border-neutral-400/40 ml-2 rounded px-4 py-4 space-y-4">
      <h1 className="text-xl font-semibold py-5">Farms list</h1>
      <Select
        onValueChange={(value) => {
          console.log(value);
          setLocation(value);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="varanasi">Varanasi</SelectItem>
          <SelectItem value="visakhapatnam">Viskhapatnam</SelectItem>
          <SelectItem value="patna">Patna</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex flex-col gap-2">
        {MapNearValue.get(location).map((value: any, index: number) => (
          <Card className="bg-[#f0c6a1] border-solid border border-amber-700">
            <CardHeader>
              <h2 className="text-lg font-semibold">Warehouse {index + 1}</h2>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
