import { auth } from "@/auth";

export default async function AppPage () {
  const session = await auth();

  return (
    <div>
      Hello {session?.user?.name}
    </div>
  );
}
