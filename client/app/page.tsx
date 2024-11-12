import Banner from "../components/banner.client";
import Card from "../components/card.server";
import { getCountries } from "../lib/api";
import { CountryType } from "../types/index";

export async function fetchCountries() {
  const response = await getCountries(process.env.NEXT_PUBLIC_URL as string);
  return response;
}

export default async function Home() {
  const countriesList = await fetchCountries();
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8 sm:p-20 gap-16">
      <main className="w-full max-w-7xl flex flex-col gap-12 items-center">
        <Banner />
        
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome! Available countries:
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countriesList.map((country: CountryType) => (
              <Card
                countryCode={country.countryCode}
                name={country.name}
                key={country.countryCode} 
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
