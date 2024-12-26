"use client";
import { TCodeParams, TPopulations } from "../types";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Population = ({ code }: TCodeParams) => {
  const [populationData, setPopulationData] = useState<TPopulations[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${code}`);
      const data = await response.json();
      const formattedData = data.population?.map(
        (item: { year: number; value: number }) => ({
          year: item.year,
          population: item.value,
        })
      );
      setPopulationData(formattedData);
    };

    fetchData();
  }, [code]);

  if (populationData?.length === 0) {
    return <div className="flex justify-center  text-gray-600">Loading</div>;
  }

  return (
    <div className="w-full h-96 p-10  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white">
      <h2 className="text-lg font-bold mb-4">Population Growth</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={populationData}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tickFormatter={(year) => year.toString()} />
          <YAxis
            tickFormatter={(value) => {
              if (value >= 1_000_000_000)
                return `${(value / 1_000_000_000).toFixed(1)}B`;
              if (value >= 1_000_000)
                return `${(value / 1_000_000).toFixed(1)}M`;
              if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
              return value.toString();
            }}
          />
          <Tooltip
            formatter={(value: number) => {
              if (value >= 1_000_000_000)
                return `${(value / 1_000_000_000).toFixed(1)}B`;
              if (value >= 1_000_000)
                return `${(value / 1_000_000).toFixed(1)}M`;
              if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
              return value.toString();
            }}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="population"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
