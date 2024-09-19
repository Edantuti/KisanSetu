import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

export async function StatusIndicator({ userId }: { userId: string }) {
  const { data: userStatus, error: userStatusError } = await createClient()
    .from("users")
    .select("status")
    .eq("id", userId)
    .single();
  return (
    <div>
      Logged In <span className="capitalize">({userStatus?.status})</span>
    </div>
  );
}
