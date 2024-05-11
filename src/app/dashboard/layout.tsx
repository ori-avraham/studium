import { auth } from "@/auth";
import { Dashboard } from "@/components/layouts/dashboard";
import DashboardProvider from "@/providers/dashboard-provider";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Studium",
  description:
    "Your gateway to innovative online learning. Dive in, learn, collaborate, and grow.",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session || !session?.user) return redirect("/");
  return (
    <DashboardProvider session={session}>
      <Dashboard>{children}</Dashboard>
    </DashboardProvider>
  );
}
