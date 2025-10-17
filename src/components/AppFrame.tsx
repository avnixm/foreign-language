"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import FloatingNav from "./FloatingNav";
import DashboardChrome from "./DashboardChrome";

type Props = {
  children: ReactNode;
};

export default function AppFrame({ children }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <>
        <FloatingNav />
        <main className="pt-16">{children}</main>
      </>
    );
  }

  return (
    <DashboardChrome>
      {children}
    </DashboardChrome>
  );
}


