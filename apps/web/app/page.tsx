import { prisma } from "@repo/database";
import { ClientThing } from "./client";

export const dynamic = "force-dynamic";
export default async function IndexPage() {
  const users = await prisma.form_response.findFirst();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <ClientThing />
    </div>
  );
}
