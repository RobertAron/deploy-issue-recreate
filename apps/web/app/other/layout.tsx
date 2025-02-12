import {prisma1} from '../../getPrismaClient'

export const dynamic = 'force-dynamic'
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await prisma1.form_response.findFirst();
  return (
    <div>
      <div>
        layout data
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      {children}
    </div>
  );
}
