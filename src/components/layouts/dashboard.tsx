"use client";

import { cn } from "@/lib/utils";
import { type PropsWithChildren } from "react";
import { Sidebar } from "../application/dashboard/sidebar";
import useDashboard from "@/hooks/use-dashboard";
import { Navbar } from "../application/dashboard/navbar";
import { Footer } from "../application/dashboard/footer";

interface DashboardProps extends PropsWithChildren {}

export function Dashboard({ children }: DashboardProps) {
  const { isOpen } = useDashboard();
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Navbar />
        <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </>
  );
}