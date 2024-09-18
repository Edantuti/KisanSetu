import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatContent } from "@/components/chat/chat-content";
import { ChatInput } from "@/components/chat/chat-input";
export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      {" "}
      <ChatHeader id={params.id} />
      <ChatContent id={params.id} />
      <ChatInput id={params.id} />
    </>
  );
}
