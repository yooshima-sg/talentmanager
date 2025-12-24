import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export type AuthSessionType = Awaited<typeof auth.$Infer.Session | null>;
export type SessionUserType = Awaited<typeof auth.$Infer.Session.user | null>;

export async function getSession(): Promise<AuthSessionType> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

export async function getUser(): Promise<SessionUserType> {
  const session = await getSession();
  return session?.user ?? null;
}
