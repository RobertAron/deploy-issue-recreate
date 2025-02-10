import Link from "next/link";

export default async function IndexPage() {
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <Link href="/some-layout">other</Link>
      </div>
      <div>
        <Link href="/broken">broken</Link>
      </div>
    </div>
  );
}
