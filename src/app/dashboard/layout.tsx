import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { type PropsWithChildren } from "react";

interface DashboardLayout extends PropsWithChildren {}

export default async function DashboardLayout({ children }: DashboardLayout) {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return <div>{children}</div>;
}
