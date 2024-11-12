import React from "react";
import Link from "next/link";
import { CountryType } from "../types/index";

export default function Card({ countryCode, name }: CountryType) {
  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{countryCode}</h2>
        <p className="text-gray-600 mb-4">{name}</p>
        <Link href={`/countries/${countryCode}`}>
          <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
