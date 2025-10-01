import DashboardShell from "@/components/dashboard/dashboard-shell";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { links } from "./links";

export default async function AppLayout ({ children }: {children: React.ReactNode}) {
  const session = await auth();

  if (!session) notFound();

  return (
    <DashboardShell links={links}>{children}</DashboardShell>
  );
}
