"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export function ChatInput({ id }: { id: string }) {
  const router = useRouter();
  const [content, setContent] = useState<string>("");
  const [receiverUser, setReceiverUser] = useState<
    { id: string; username: string } | any
  >({});
  const [user, setUser] = useState<string>("");
  const supabase = createClient();

  async function getUserDataId() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return router.push("/login");
    }
    const { data, error } = await supabase
      .from("users")
      .select("userid")
      .eq("id", user.id)
      .single();
    return data!.userid;
  }
  async function getReceiverUser() {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("userid", id);
    if (error) {
      console.error(error);
      return {};
    }
    return data;
  }
  useEffect(() => {
    getUserDataId()
      .then((response) => {
        setUser(response!);
      })
      .catch((error) => console.log(error));
    getReceiverUser()
      .then((response: any) => {
        setReceiverUser(response[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  const sendMessage = async () => {
    const { error } = await supabase.from("Chat").insert({
      message: content,
      from: user,
      to: receiverUser.userid,
    });

    if (error) {
      console.error(error);
      return {};
    }
  };
  function updateContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }
  //TODO: Changes required here
  function handleKeyPress(event: any) {
    if (event.key === "Enter") {
      sendMessage();
    } else {
      return;
    }
  }
  return (
    <footer className="border-t border-border p-4">
      <div className="flex gap-2">
        <Input
          placeholder="Type a message..."
          className="flex-1"
          onChange={(event) => {
            updateContent(event);
          }}
          onKeyDown={handleKeyPress}
        />
        <Button
          onClick={() => {
            sendMessage();
          }}
        >
          Send
        </Button>
      </div>
    </footer>
  );
}
