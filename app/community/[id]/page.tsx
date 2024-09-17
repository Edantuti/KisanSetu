import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FarmerType } from "@/utils/types";
import { User } from "lucide-react";

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
      <h1 className="text-3xl font-bold mb-8">
        Community Members - National Farmers Union (NFU)
      </h1>
      <section aria-labelledby="small-cards-title" className="mb-12 space-y-4">
        <h2 id="small-cards-title" className="text-2xl font-semibold mb-4">
          Community Overview
        </h2>
        <p>
          The National Farmers Union advocates for family farmers, promoting
          sustainable agriculture, fair markets, and rural community well-being.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-medium">Total Farm Land</h3>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">43 hectacres</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl font-medium">Total Farmers</h3>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">3 Farmers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl font-medium">Total Contracts Completed</h3>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">2 contracts</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl font-medium">Location</h3>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Varanasi,Uttar Pradesh, 221010
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section aria-labelledby="small-cards-title" className="mb-12">
        <h2 id="small-cards-title" className="text-2xl font-semibold mb-4">
          Farmer Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {farmers.map((member) => (
            <Card
              key={member.id}
              className="hover:shadow-lg transition-shadow outline-1"
            >
              <CardContent className="flex items-center p-4 gap-2">
                <User className="size-8 border rounded-full overflow-visible" />
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section aria-labelledby="profile-cards-title">
        <h2 id="profile-cards-title" className="text-2xl font-semibold mb-4">
          Member Profiles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {farmers.map((member) => (
            <Card
              key={member.id}
              className="hover:shadow-lg transition-shadow outline-1"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {new Date().getFullYear() -
                      member.date_of_birth.getFullYear()}{" "}
                    age
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4>Father Name</h4>
                  <p className="text-muted-foreground">{member.father_name}</p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p className="text-muted-foreground">{member.phone_number}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
