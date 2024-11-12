"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCountry, getFlags } from "../../../lib/api";
import Image from "next/image";
import { Country } from "../../../types/index";
import { useParams } from "next/navigation";

export async function fetchCountry(countryCode: string) {
  const response = await getCountry(
    process.env.NEXT_PUBLIC_URL_DETAILS as string,
    countryCode
  );
  return response;
}

export default function Page() {
  const [countryFetched, setCountryFetched] = useState<Country | null>(null);
  const [flag, setFlag] = useState<string | null>(null);
  const router = useParams();
  const { countryCode } = router as { countryCode: string };

  useEffect(() => {
    if (countryCode) {
      async function fetchData() {
        const fetchedCountry = await fetchCountry(countryCode);
        setCountryFetched(fetchedCountry);
        const flagsData = await getFlags(
          process.env.NEXT_PUBLIC_URL_FLAGS as string
        );
        const countryFlag = flagsData.find(
          (flagObj: any) => flagObj.flag.iso2 === countryCode
        );

        setFlag(countryFlag?.flag.flag);
      }
      fetchData();
    }
  }, [countryCode]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12 px-6">
      <h1 className="text-center text-gray-600">
        Borders for {countryFetched?.commonName} Country
      </h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden md:grid md:grid-cols-2 py-2 px-2">
        <div className="relative h-64">
          {!flag && (
            <div className="mx-10 my-10">
              <span className="text-center font-sans bg-red-500 p-5 rounded-md">
                Searching for Flag...
              </span>
            </div>
          )}
          {flag && (
            <Image
              src={flag}
              layout="fill"
              objectFit="cover"
              alt={"Country Flag"}
              className="w-full h-full mb-5"
            />
          )}
        </div>
        {countryFetched?.borders?.length === 0 && (
          <div className="text-center text-gray-600 py-16 font-sans">
            No Borders to show
          </div>
        )}
        {countryFetched?.borders.map((country: any) => (
          <div className="p-6 md:p-8 flex flex-col" key={country.countryCode}>
            <Link href={`/countries/${country.countryCode}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {country?.commonName}
              </h2>
            </Link>
            <span className="text-gray-600">
              Official Name: {country.officialName}
            </span>
            <span className="text-gray-600">Region: {country.region}</span>
          </div>
        ))}
      </div>
      <Link href="/">
        <button className="my-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Back to List
        </button>
      </Link>
    </div>
  );
}
