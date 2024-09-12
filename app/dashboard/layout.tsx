import { ReactNode } from "react";
import { getUserStatus } from "../actions";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const { data } = await getUserStatus();
  if (!data) {
    return redirect("/onboarding");
  }
  return <>{children}</>;
}
