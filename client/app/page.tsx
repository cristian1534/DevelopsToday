import { Card } from "../components/Card";

export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  const data = await response.json();
  return (
    <div className="container mx-auto p-10">
      <Card data={data} />
    </div>
  );
}
