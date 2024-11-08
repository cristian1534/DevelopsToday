import React from "react";
import useFetch from "../customHooks/useFetch";
import Link from "next/link";
import "./Countries.css"; 

export default function Countries() {
  const URL = process.env.NEXT_PUBLIC_REACT_URL;
  const { data, loading } = useFetch(URL);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!data) {
    return <div className="error">Error fetching data</div>;
  }

  return (
    <div className="countries-container">
      <table className="countries-table">
        <thead>
          <tr className="table-header">
            <th scope="col">Code</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country) => (
            <tr key={country.countryCode}>
              <th scope="row">{country.countryCode}</th>
              <td>
                <Link href={`/countries/${country.countryCode}`} passHref>
                  <span className="country-link">{country.name}</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
