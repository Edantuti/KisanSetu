import NavBar from "@/components/common/NavHome";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar absoluteLago={true} />
      {children}
    </>
  );
}
