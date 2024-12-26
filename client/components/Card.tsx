"use client";
import React, { useState } from "react";
import { TCard } from "../types";
import Link from "next/link";
import { usePagination } from "../useHooks/usePagination";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

interface CardProps {
  data: TCard[];
}

export const Card = ({ data }: CardProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = data.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageLimit = 12;
  const { currentPage, offset, totalPages, getPageNeighbours, changePage } =
    usePagination({
      totalRecords: filteredCountries.length,
      pageLimit,
    });

  const currentCountries = filteredCountries.slice(offset, offset + pageLimit);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        className="text-white w-full p-2 mb-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCountries.map((card) => (
          <div
            className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={card.countryCode}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.name}
              <span>{` (${card.countryCode})`}</span>
            </h5>

            <Link
              href={`/countries/${card.countryCode}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center mt-8 text-gray-500 font-sans">
        <div className="flex">
          <button
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
            className="p-2"
          >
            <BiSolidLeftArrow />
          </button>
          {getPageNeighbours(currentPage).map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`rounded-sm p-2 ${
                currentPage === page
                  ? " bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
                  : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
            className="p-2"
          >
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
