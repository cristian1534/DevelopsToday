import React from "react";
import useFetch from "../../customHooks/useFetch";
import useFetchFlags from "../../customHooks/useFechFlags";
import { useRouter } from "next/router";
import Link from "next/link";
import "./CountryDetails.css"; 
import "dotenv/config";

export default function CountryDetails() {
  const router = useRouter();
  const { countryCode } = router.query;

  const URL = `${process.env.NEXT_PUBLIC_REACT_URL}/${countryCode}`;
  console.log(URL);
  const URL_FLAGS = process.env.NEXT_PUBLIC_REACT_URL_FLAGS;

  const { data, loading } = useFetch(URL);
  const { data: flagsData, loading: flagsLoading } = useFetchFlags(URL_FLAGS);

  if (loading || flagsLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!data || !flagsData) {
    return <div className="error">Error fetching data</div>;
  }

  const countryFlag = flagsData?.data?.find((flag) => flag.iso2 === countryCode);
  if (!countryFlag) {
    return <div className="error">Searching for Flag...</div>;
  }

  return (
    <div className="country-details-container">
      <h2 className="country-name">Details for {data.commonName} Country</h2>
      <p className="country-info">Official Name: {data.officialName}</p>
      <p className="country-info">Country Code: {data.countryCode}</p>
      <p className="country-info">Region: {data.region}</p>
      <img className="country-flag" src={countryFlag.flag} alt="country-flag" width={200} />
      <h3 className="borders-heading">Borders:</h3>
      <ul className="borders-list">
        {data.borders.map((borderCountry) => (
          <li key={borderCountry.countryCode} className="border-country">
            <Link href={`/countries/${borderCountry.countryCode}`}>
              <p className="border-link">{borderCountry.commonName}</p>
            </Link>
            {" "} - {borderCountry.officialName} - {borderCountry.countryCode}
          </li>
        ))}
      </ul>
    </div>
  );
}
