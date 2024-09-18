import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex h-screen bg-background text-foreground">
        <aside className="w-64 border-r border-border">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Chat</h2>
            <ScrollArea className="h-[calc(100vh-140px)]">
              <div className="space-y-2">
                {["Muskesh", "Suresh", "Mahesh", "Vikash", "Bulma"].map(
                  (name) => (
                    <Link href={`/dashboard/chat/${name}`}>
                      <Button
                        key={name}
                        variant="ghost"
                        className="w-full justify-start"
                      >
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage
                            src={`https://picsum.photos/seed/${name}/200`}
                            alt={name}
                          />
                          <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                        {name}
                      </Button>
                    </Link>
                  ),
                )}
              </div>
            </ScrollArea>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">{children}</main>
      </div>
    </>
  );
}
