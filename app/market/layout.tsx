import NavBar from "@/components/common/NavHome";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-[#f4d8bf]">
      <NavBar absoluteLago={false} />
      {children}
    </main>
  );
}
