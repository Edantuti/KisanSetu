import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const { data, error } = await createClient().from("Farmer").select();
  return <section></section>;
}
