import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FarmerType } from "@/utils/types";
import { User } from "lucide-react";
import Link from "next/link";

const farmers: (FarmerType & { id: string })[] = [
  {
    id: "dfkalsjd",
    name: "Farmer 1",
    aadhar_number: "452445244524",
    date_of_birth: new Date("1964-04-11"),
    father_name: "Father 1",
    phone_number: "+917858344559",
  },

  {
    id: "dfkal",
    name: "Farmer 2",
    aadhar_number: "524452445244",
    date_of_birth: new Date("1990-04-11"),
    father_name: "Father 2",
    phone_number: "+917834455958",
  },
  {
    id: "dkal",
    name: "Farmer 3",
    aadhar_number: "446444644464",

    date_of_birth: new Date("1999-04-11"),
    father_name: "Father 3",
    phone_number: "+917854559959",
  },
];

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Community</h1>
      <Card className="w-96">
        <CardHeader>
          <h2 id="small-cards-title">
            <Button
              asChild
              variant="link"
              className="text-2xl font-semibold mb-4 p-0"
            >
              <Link href="/community/National Farmers Union">
                National Farmers Union (NFU)
              </Link>
            </Button>
          </h2>
          <CardDescription>
            The National Farmers Union advocates for family farmers, promoting
            sustainable agriculture, fair markets, and rural community
            well-being.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p>
              District :
              <span className="text-sm text-muted-foreground"> Varanasi</span>
            </p>
            <p>
              State :{" "}
              <span className="text-sm text-muted-foreground">
                UttarPradesh{" "}
              </span>
            </p>
            <p>
              Pincode :
              <span className="text-sm text-muted-foreground"> 221010</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
