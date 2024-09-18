"use client";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
type ChatType = {
  id: string;
  from: string;
  to: string;
  message: string;
  created_at: string;
};
export function ChatContent({ id }: { id: string }) {
  const supabase = createClient();
  const router = useRouter();
  const [messages, setMessages] = useState<ChatType[]>([]);
  const [user, setUser] = useState<string>("");
  const [receiverUser, setReceiverUser] = useState<
    { id: string; username: string } | any
  >({});

  useEffect(() => {
    getData()
      .then((response: any) => {
        setUser(response.user);
        setReceiverUser({ ...response.to });
        setMessages(response.messages);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const channel = supabase
      .channel("message-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "Chat",
        },
        (payload) => {
          console.log(payload, receiverUser);

          if (
            payload.new.to === receiverUser.userid &&
            payload.new.from === user
          ) {
            const newMessages = [...messages, payload.new as ChatType];
            newMessages.sort(
              (a, b) =>
                Number(new Date(a.created_at)) - Number(new Date(b.created_at)),
            );
            setMessages([...newMessages]);
          }
        },
      )
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "Chat",
        },
        (payload) => {
          console.log(payload, receiverUser);
          if (
            payload.new.from === receiverUser.userid &&
            payload.new.to === user
          ) {
            const newMessages = [...messages, payload.new as ChatType];
            newMessages.sort(
              (a, b) =>
                Number(new Date(a.created_at)) - Number(new Date(b.created_at)),
            );
            setMessages([...newMessages]);
          }
        },
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "Chat",
        },
        (payload) => {
          const updatedMessage = payload.new;
          if (
            updatedMessage.to === receiverUser.userid &&
            updatedMessage.from === user
          ) {
            for (let i = 0; i < messages.length; i++) {
              if (messages[i].id === updatedMessage.id) {
                messages[i] = updatedMessage as ChatType;
              }
            }
            setMessages([...messages]);
          }
        },
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "Chat",
        },
        (payload) => {
          const updatedMessage = payload.new;
          if (
            updatedMessage.from === receiverUser.userid &&
            updatedMessage.to === user
          ) {
            for (let i = 0; i < messages.length; i++) {
              if (messages[i].id === updatedMessage.id) {
                messages[i] = updatedMessage as ChatType;
              }
            }
            setMessages([...messages]);
          }
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, messages, setMessages]);
  async function getData() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return router.push("/login");
    }
    const { data: to, error: ToError } = await supabase
      .from("users")
      .select()
      .eq("userid", id)
      .single();
    if (ToError) {
      console.error(ToError);
      return {};
    }
    const { data: from, error: FromError } = await supabase
      .from("users")
      .select()
      .eq("id", user.id)
      .single();
    if (FromError) {
      console.error(FromError);
      return {};
    }
    const { data: fromMessages, error: fromMessagesError } = await supabase
      .from("Chat")
      .select()
      .eq("from", from.userid)
      .eq("to", to.userid);
    const { data: toMessages, error: toMessagesError } = await supabase
      .from("Chat")
      .select()
      .eq("from", to.userid)
      .eq("to", from.userid);
    const messages = [...fromMessages!, ...toMessages!];
    messages.sort(
      (a, b) => Number(new Date(a.created_at)) - Number(new Date(b.created_at)),
    );
    if (fromMessagesError || toMessagesError) {
      console.error(fromMessagesError);
      console.error(toMessagesError);
      return [];
    }
    return { user: from.userid, to: to, messages: messages };
  }
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages.map((value) => (
          <>
            {value.to === user && (
              <div key={value.id} className="flex items-start">
                <div className="bg-[#C3AC98] p-3 rounded-lg max-w-[70%]">
                  <p>{value.message}</p>
                </div>
              </div>
            )}
            {value.from === user && (
              <div key={value.id} className="flex items-start justify-end">
                <div className="bg-[#d9b18b] p-3 rounded-lg max-w-[70%]">
                  <p>{value.message}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
