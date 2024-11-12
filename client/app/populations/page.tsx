"use client";

import React, { useEffect, useState } from "react";
import { getPopulations } from "../../lib/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Link from "next/link";

interface PopulationCount {
  year: string;
  value: number;
}

interface CountryPopulation {
  country: string;
  populationCounts: PopulationCount[];
}

type PopulationData = CountryPopulation[];

export async function fetchPopulation(
  countryCode: string
): Promise<PopulationData> {
  const response = await getPopulations(
    process.env.NEXT_PUBLIC_URL_POPULATION as string,
    countryCode
  );
  return response;
}

export default function Population() {
  const [example, setExample] = useState(0);
  const [populationCountriesData, setPopulationCountriesData] =
    useState<PopulationData | null>(null);
  const countryPopulationsExamples = ["BIH", "ARM", "BRN"];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPopulation(countryPopulationsExamples[example]);
        setPopulationCountriesData(data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    }

    fetchData();
  }, [example]);

  if (!populationCountriesData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-8">
        <div className="text-center bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Loading...
          </h2>
          <p className="text-gray-500">Please wait...</p>
        </div>
      </div>
    );
  }

  if (!populationCountriesData[0]) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-8">
        <div className="text-center bg-red-100 text-red-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Error Fetching Data</h2>
          <p className="text-gray-600">
            There was an issue retrieving the population data. Please try again
            later.
          </p>
        </div>
      </div>
    );
  }

  const chartData = {
    labels: populationCountriesData[0].populationCounts.map(
      (item) => item.year
    ),
    datasets: [
      {
        label: `Population of ${populationCountriesData[0].country}`,
        data: populationCountriesData[0].populationCounts.map(
          (item) => item.value
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8 sm:p-20 gap-16">
      <main className="w-full max-w-7xl flex flex-col gap-12 items-center">
        <section className="w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Population Data: {countryPopulationsExamples[example]}
          </h1>
          <div className="flex justify-between items-center mb-4">
            <Link href="/">
              <button className="my-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Back Home
              </button>
            </Link>
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() =>
                setExample((example + 1) % countryPopulationsExamples.length)
              }
            >
              Next Country
            </button>
          </div>
        </section>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <Line data={chartData} options={chartOptions} />
        </div>
      </main>
    </div>
  );
}
