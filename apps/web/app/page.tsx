import Link from "next/link";
import { prisma1 } from "../getPrismaClient";
import { ClientThing } from "./client";

export const dynamic = "force-dynamic";
export default async function IndexPage() {
  const users = await prisma1.form_response.findFirst();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <Link href='/other'>other page</Link>
      {/* Adding this client component fixes the problem... */}
      <ClientThing />
    </div>
  );
}
