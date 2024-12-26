import React from "react";
import { Details } from "../../../../components/Details";
import { Population } from "../../../../components/Population";
import Link from "next/link";

const Page = async ({ params }: { params: { code: string } }) => {
  const code = params.code;

  return (
    <div className="w-full p-4 md:p-6 bg-gray-50 min-h-screen">
      <Link href="/">
        <h1 className="text-2xl font-bold text-center text-gray-600 mb-6 uppercase">
          ⬅︎ Back Home
        </h1>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Details code={code} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <Population code={code} />
        </div>
      </div>
    </div>
  );
};

export default Page;
