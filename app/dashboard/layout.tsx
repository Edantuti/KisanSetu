import { ReactNode } from "react";
import { getUserStatus } from "../actions";
import { redirect } from "next/navigation";
import NavBar from "@/components/common/NavHome";

export default async function Layout({ children }: { children: ReactNode }) {
  const { data } = await getUserStatus();
  if (!data) {
    return redirect("/onboarding");
  }
  return (
    <>
      <NavBar absoluteLago={false} />
      {children}
    </>
  );
}
