import "./Populations.css";
import "dotenv/config";
import React, { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";
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

export default function Population() {
  const [example, setExample] = useState(2);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const [populationCountriesData, setPopulationCountriesData] = useState(null);
  const countryPopulationsExamples = ["BIH", "ARM", "BRN"];
  const URL = `${process.env.NEXT_PUBLIC_REACT_URL_POPULATION}/${
    countryPopulationsExamples[`${example}`]
  }`;

  const { data, loading } = useFetch(URL);

  useEffect(() => {
    if (data) {
      setPopulationCountriesData(data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>Error fetching data</div>;
  }
  if (!populationCountriesData || !populationCountriesData[0]) {
    return <div>Error fetching data</div>;
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
        position: "top",
      },
      tooltip: {
        mode: "index",
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
    <div className="container">
      <h2>Population Data: {countryPopulationsExamples[`${example}`]}</h2>
      <Link href="/">
        <span className="back-button">Back Home</span>
      </Link>
      <button
        type="button"
        className="next-button"
        onClick={() =>
          setExample((example + 1) % countryPopulationsExamples.length)
        }
      >
        Next Country
      </button>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
