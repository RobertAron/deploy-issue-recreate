import { prisma } from "../../other/getPrismaClient";
import { ComponentThatCallsAction } from "./client";

export default async function Page() {
  const data = await prisma.form_response.findFirst();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ComponentThatCallsAction />
    </div>
  );
}
