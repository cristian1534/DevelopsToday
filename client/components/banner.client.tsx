"use client";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg shadow-md w-full max-w-lg">
      <h1 className="text-4xl font-sans font-bold text-gray-800">
        DevelopsToday <span className="text-teal-400">Challenge</span>
      </h1>
      <h2 className="font-inter text-lg text-gray-600 mt-4">
        Showing populations details
      </h2>
      <div className="mt-8">
        <Link href="/populations">
          <button
            type="button"
            className="font-sans px-6 py-3 rounded-lg text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 shadow-lg transition-transform transform hover:scale-105"
          >
            View Population examples
          </button>
        </Link>
      </div>
    </div>
  );
}
