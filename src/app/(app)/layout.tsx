import DashboardShell from "@/components/dashboard/dashboard-shell";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { links } from "./links";

export default async function AppLayout ({ children }: {children: React.ReactNode}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardShell links={links}>{children}</DashboardShell>
  );
}
