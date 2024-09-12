import { redirect } from "next/navigation";
import { getUserInfo, getUserStatus } from "../actions";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const { data, error } = await getUserStatus();
  if (!data) {
    return redirect("/onboarding");
  }
  if (data.status === "farmer") {
    const { data: info, error } = await getUserInfo(data.status);
    console.log(info);
  }
  if (data.status === "buyer") {
    const { data: info, error } = await getUserInfo(data.status);
    console.log(info);
  }
  return <section></section>;
}
