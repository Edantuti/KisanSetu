"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { changeBuyerClauses, changeFarmerClauses } from "@/app/actions";

export function CheckboxContractClauses({
  clauses_id,
  type,
  farmer,
  buyer,
  description,
}: {
  clauses_id: string;
  type: string;
  farmer: boolean;
  buyer: boolean;
  description: string;
}) {
  const [farmerOption, setFarmerOption] = useState(farmer);
  const [buyerOption, setBuyerOption] = useState(buyer);
  async function changeFarmerCheckbox(checked: boolean) {
    await changeFarmerClauses(clauses_id, checked);
    setFarmerOption(checked);
  }
  async function changeBuyerCheckbox(checked: boolean) {
    await changeBuyerClauses(clauses_id, checked);
    setBuyerOption(checked);
  }
  //TODO: Checkbox dialog
  return (
    <Card className="w-full max-w-md p-4">
      <CardHeader>
        <CardTitle>Mark as Done</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{description}</p>

        <div className="flex items-center space-x-2 mb-2">
          <Checkbox
            id="option1"
            checked={farmerOption}
            disabled={farmer || type === "buyer"}
            onCheckedChange={(checked) => {
              changeFarmerCheckbox(Boolean(checked));
            }}
          />
          <label htmlFor="option1">Farmer Option</label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="option2"
            checked={buyerOption}
            disabled={buyer || type === "farmer"}
            onCheckedChange={(checked) => {
              changeBuyerCheckbox(Boolean(checked));
            }}
          />
          <label htmlFor="option2">Buyer option</label>
        </div>
      </CardContent>
    </Card>
  );
}
