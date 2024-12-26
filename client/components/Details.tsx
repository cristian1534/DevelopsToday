import React from "react";
import { TBor, TCodeParams } from "../types/index";
import Image from "next/image";
import Link from "next/link";

export const Details = async ({ code }: TCodeParams) => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${code}`);
  const data = await response.json();
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full max-w-sm p-6">
          {data.flag ? (
            <Image
              className="rounded-t-lg"
              width={500}
              height={300}
              src={data.flag}
              alt="Country Flag"
              priority
            />
          ) : (
            <div className="container rounded-lg p-4 bg-gray-200 flex items-center justify-center">
              <span>No Flag Available</span>
            </div>
          )}

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.commonName}
                {` (${data.countryCode})`}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span>Official Name: </span> {data.officialName}
            </p>
            <div className="w-full mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.borders.map((bor: TBor) => (
                  <Link
                    key={bor.countryCode}
                    className="flex flex-col items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-auto relative px-4 py-2"
                    href={`/countries/${bor.countryCode}`}
                  >
                    <div className="mb-5">
                      {bor.commonName}
                      {` (${bor.countryCode})`}
                    </div>

                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 absolute bottom-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
