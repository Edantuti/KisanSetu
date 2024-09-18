"use client";
import { createClient } from "@/utils/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";

export function ChatHeader({ id }: { id: string }) {
  const [user, setUser] = useState<string>("");
  async function getUser() {
    return createClient().from("users").select().eq("userid", id).single();
  }
  useEffect(() => {
    getUser()
      .then(({ data }) => {
        setUser(data!.name);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <header className="border-b border-[#a88c72] p-4 flex items-center">
      <div>
        <h2 className="text-lg font-semibold">{user}</h2>
        <p className="text-sm">+916281506041</p>
      </div>
    </header>
  );
}
