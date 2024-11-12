import { CountryType } from "../types/index";

export async function getCountries(URL: string): Promise<any> {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.map((country: CountryType) => ({
      countryCode: country.countryCode,
      name: country.name,
    }));
  } catch (error: any) {
    console.error("Error fetching countries:", error.message);
    return [];
  }
}

export async function getCountry(
  URL: string,
  countryCode: string
): Promise<any> {
  try {
    const response = await fetch(`${URL}/${countryCode}`);
    const data = await response.json();

    return data;
  } catch (error: any) {
    console.error("Error fetching country:", error.message);
    return null;
  }
}

export async function getFlags(URL: string): Promise<any> {
  try {
    const response = await fetch(`${URL}`);
    const { data } = await response.json();

    return data.map((flag: string) => ({ flag }));
  } catch (error: any) {
    console.error("Error fetching flags:", error.message);
    return [];
  }
}

export async function getPopulations(URL: string, countryCode: string): Promise<any> {
  try {
    const response = await fetch(`${URL}/${countryCode}`); 
    const  data  = await response.json();
    console.log(data);
    return data;
  } catch (error: any) {
    console.error("Error fetching populations:", error.message);
    return [];
  }
}
