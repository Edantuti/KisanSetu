import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { getUserStatus } from "@/app/actions";
import { ChatMenuItem } from "@/components/chat/chat-menu";
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
      <div className="flex min-h-[50vh] bg-background text-foreground">
        <aside className="w-64 border-r border-border">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Chat</h2>
            <ScrollArea className="h-[calc(100vh-140px)]">
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
          </div>
        </aside>

        <main className="flex-1 flex flex-col">{children}</main>
      </div>
    </>
  );
}
