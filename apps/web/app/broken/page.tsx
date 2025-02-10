import { prisma } from "../../other/getPrismaClient";
import { ComponentThatCallsAction } from "./client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const runtime = "nodejs";
export default async function Page() {
  const data = await prisma.form_response.findFirst();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ComponentThatCallsAction />
    </div>
  );
}
