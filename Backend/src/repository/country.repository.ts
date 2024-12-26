import axios from "axios";
import "dotenv/config";

export class CountryRepository {
  async getAllCountries() {
    const response = await axios.get(
      `${process.env.BASE_URL}/AvailableCountries`
    );
    return response.data;
  }

  async getCountryById(code: string) {
    const response = await axios.get(
      `${process.env.BASE_URL}/CountryInfo/${code}`
    );
    return response.data;
  }

  async getCountryFlag() {
    const response = await axios.get(`${process.env.BASE_URL_DATA}/countries/flag/images`);
    return response.data;
  }

  async getPopulation() {
    const response = await axios.get(`${process.env.BASE_URL_DATA}/countries/population`);
    return response.data;
  }
}
