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
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

//TODO: Add deadline to each monitor clauses
//TODO: Redirect after completion creation of the contract
//TODO: Add deadline to each monitor clauses

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
  // console.log(type,data,description);

  //TODO: Checkbox dialog
  return (
    <Dialog open={openDialog}>
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>{description}</CardTitle>
          <CardDescription className="space-y-1">
            <p>Status</p>
            {data.farmer && data.contractor ? (
              <Badge>Completed</Badge>
            ) : (
              <Badge>Incomplete</Badge>
            )}
            <p className="px-1">Payment Status</p>
            <span className="space-x-2">
              {" "}
              {data.contractor ? (
                <Badge className="bg-green-600">Payment Done</Badge>
              ) : (
                <Badge>Incomplete Payment</Badge>
              )}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-2">
            <p className="font-semibold">Farmer:</p>

            {data.farmer_marked ? (
              <span className="text-xs">
                Marked at {new Date(data.farmer_marked).toLocaleDateString()}
              </span>
            ) : (
              <span className="text-xs">Unmarked</span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <p className="font-semibold">Buyer:</p>
            {data.contractor_marked ? (
              <span className="text-xs">
                Marked at{" "}
                {new Date(data.contractor_marked).toLocaleDateString()}
              </span>
            ) : (
              <span className="text-xs">Unmarked</span>
            )}
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

export function MonitorContractChecker({
  clauses,
}: {
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
}) {
  return (
    <div className="w-fit flex flex-col gap-2 p-10">
      <h1 className="text-xl antialiased font-semibold">
        Clauses Status Update
      </h1>
      <span className="flex items-center gap-px">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Monitor Clauses?" />
          </SelectTrigger>
          <SelectContent>
            {clauses.map((value, index) => (
              <SelectItem
                key={value.description}
                value={value.MonitorClauses[0]?.clauses_id}
              >
                Clause {index + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </span>
      <span className="flex items-center gap-px">
        <Label htmlFor="due-date">Due Date :</Label>
        <Input type="date" className="w-full" name="due-date" />
      </span>
      <span className="flex items-center gap-2">
        <Input type="text" className="w-72" placeholder="Review" />
        <Button>Update</Button>
      </span>
      <span className="flex items-center gap-2">
        <Input type="file" className="w-72" placeholder="Image" />
        <Button>Update</Button>
      </span>
      <span className="flex items-center gap-2">
        <Input type="text" className="w-72" placeholder="E-signature" />
        <Button>Submit</Button>
      </span>
    </div>
  );
}

// <div className="flex items-center space-x-2 mb-2">
//   <Checkbox
//     id="option1"
//     checked={farmerOption}
//     disabled={data.farmer || type === "buyer"}
//     onCheckedChange={(checked) => {
//       setOpenDialog(true);
//     }}
//   />
//   <label htmlFor="option1" className="text-xs">
//     <div>
//       <p className="font-semibold">Farmer Option</p>

//       {data.farmer_marked && (
//         <span className="text-xs">
//           Marked at{" "}
//           {new Date(data.farmer_marked).toLocaleDateString()}
//         </span>
//       )}
//     </div>
//   </label>
// </div>
// <div className="flex items-center space-x-2 mb-2">
//   <Checkbox
//     id="option1"
//     checked={farmerOption}
//     disabled={data.farmer || type === "buyer"}
//     onCheckedChange={(checked) => {
//       setOpenDialog(true);
//     }}
//   />
//   <label htmlFor="option1" className="text-xs">
//     <div>
//       <p className="font-semibold">Farmer Option</p>

//       {data.farmer_marked && (
//         <span className="text-xs">
//           Marked at{" "}
//           {new Date(data.farmer_marked).toLocaleDateString()}
//         </span>
//       )}
//     </div>
//   </label>
// </div>
