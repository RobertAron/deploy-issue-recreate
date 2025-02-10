import { prisma } from "../../other/getPrismaClient";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await prisma.form_response.findFirst();
  return (
    <div>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      {children}
    </div>
  );
}
