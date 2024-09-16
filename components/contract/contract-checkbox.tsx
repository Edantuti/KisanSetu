"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { changeBuyerClauses, changeFarmerClauses } from "@/app/actions";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function CheckboxContractClauses({
  type,
  data,
  description,
}: {
  type: string;
  data: {
    clauses_id: string;
    farmer: boolean;
    contractor: boolean;
    farmer_marked: string | null;
    contractor_marked: string | null;
  };
  description: string;
}) {
  const [farmerOption, setFarmerOption] = useState(false);
  const [buyerOption, setBuyerOption] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  async function changeFarmerCheckbox(checked: boolean) {
    await changeFarmerClauses(data.clauses_id, checked);
    changeFarmerClauses(data.clauses_id, checked);
    setFarmerOption(checked);
  }
  async function changeBuyerCheckbox(checked: boolean) {
    changeBuyerClauses(data.clauses_id, checked);
    setBuyerOption(checked);
  }
  function handleSubmit() {
    console.log(type);
    if (type === "farmer" && inputValue === "farmer") {
      changeFarmerCheckbox(true);
      setOpenDialog(false);
    } else if (type === "buyer" && inputValue === "buyer") {
      changeBuyerCheckbox(true);
      setOpenDialog(false);
    }
  }
  useEffect(() => {
    if (data) {
      setFarmerOption(data.farmer);
      setBuyerOption(data.contractor);
      setLoading(false);
    }
  }, [data]);
  if (loading) {
    return <>Loading...</>;
  }

  //TODO: Checkbox dialog
  return (
    <Dialog open={openDialog}>
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>Monitor Clauses</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox
              id="option1"
              checked={farmerOption}
              disabled={data.farmer || type === "buyer"}
              onCheckedChange={(checked) => {
                setOpenDialog(true);
              }}
            />
            <label htmlFor="option1" className="text-xs">
              <div>
                <p className="font-semibold">Farmer Option</p>

                {data.farmer_marked && (
                  <span className="text-xs">
                    Marked at{" "}
                    {new Date(data.farmer_marked).toLocaleDateString()}
                  </span>
                )}
              </div>
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="option2"
              checked={buyerOption}
              disabled={data.contractor || type === "farmer"}
              onCheckedChange={(checked) => {
                setOpenDialog(true);
              }}
            />
            <label htmlFor="option2" className="text-xs">
              <p className="font-semibold">Buyer option </p>
              {data.contractor_marked && (
                <span className="text-xs">
                  Marked at{" "}
                  {new Date(data.contractor_marked).toLocaleDateString()}
                </span>
              )}
            </label>
          </div>
        </CardContent>
      </Card>
      <DialogContent>
        <DialogTitle>Confirm your Action</DialogTitle>
        <DialogDescription>
          Type <code>{type}</code> in the input box confirm.
        </DialogDescription>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="confirm" className="sr-only">
              Confirm
            </Label>
            <Input
              id="confirm"
              onChange={(event) => setInputValue(event.target.value)}
              type="text"
              placeholder={type}
            />
          </div>
          <Button
            onClick={() => {
              handleSubmit();
            }}
            onSubmit={() => {
              handleSubmit();
            }}
            type="submit"
            size="sm"
            className="px-3"
          >
            Submit
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => {
              setOpenDialog(false);
            }}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
