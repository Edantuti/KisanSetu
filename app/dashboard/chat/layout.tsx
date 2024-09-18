import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { getUserStatus } from "@/app/actions";
import { ChatMenuItem } from "@/components/chat/chat-menu";

const communityDate = [
  {
    title: "The National Farmers Union (NFU)",
    description:
      "The National Farmers Union advocates for family farmers, promoting sustainable agriculture, fair markets, and rural community well-being.",
    district: "Varanasi",
    state: "Uttar Pradesh",
    pincode: "221010",
    link: "/community/National Farmers Union",
  },
  {
    title: "Organic Farmers Alliance (OFA)",
    description:
      "A network of farmers promoting organic farming techniques and ensuring the sustainability of agriculture across rural regions.",
    district: "Rampur",
    state: "Bihar",
    pincode: "845401",
    link: "/community/Organic Farmers Alliance",
  },
  {
    title: "AgriTech Innovators",
    description:
      "Empowering farmers through cutting-edge technology solutions for improved crop management and sustainable farming practices.",
    district: "Jabalpur",
    state: "Madhya Pradesh",
    pincode: "482001",
    link: "/community/AgriTech Innovators",
  },
];

export default async function Layout({ children }: { children: ReactNode }) {
  const { data: userStatus, error: userStatusError } = await getUserStatus();
  const { data: farmer, error: farmerError } = await createClient()
    .from("Farmer")
    .select("name, user_id");
  const { data: buyer, error: buyerError } = await createClient()
    .from("Buyers")
    .select("name, user_id");
  return (
    <>
      <div className="flex bg-[#f4d8bf] text-foreground">
        <aside className="w-64 border-r border-[#a88c72]">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Chat</h2>
            <ScrollArea className="min-h-[calc(70vh/2)]">
              <div className="space-y-2">
                {userStatus!.status === "farmer" &&
                  buyer!.map(({ name, user_id }) => (
                    <ChatMenuItem key={user_id} name={name} user_id={user_id} />
                  ))}
                {userStatus!.status === "buyer" &&
                  farmer!.map(({ name, user_id }) => (
                    <ChatMenuItem key={user_id} name={name} user_id={user_id} />
                  ))}
              </div>
            </ScrollArea>
            <h2 className="text-xl font-semibold mb-4">Community</h2>
            <ScrollArea className="min-h-[calc(70vh/2)]">
              {communityDate.map(({ title }) => (
                <ChatMenuItem key={title} name={title} user_id={title} />
              ))}
            </ScrollArea>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">{children}</main>
      </div>
    </>
  );
}
