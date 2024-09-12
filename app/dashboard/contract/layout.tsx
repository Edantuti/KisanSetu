import { ReactNode } from "react";
import { getUserStatus } from "@/app/actions";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const { data } = await getUserStatus();
  if (data && data.status === "farmer") {
    return redirect("/dashboard");
  }
  return <>{children}</>;
}
