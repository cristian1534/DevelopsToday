import { CountryRepository } from "../repository/country.repository";

export class CountryService {

  private countryRepository: CountryRepository;

  constructor() {
    this.countryRepository = new CountryRepository();
  }
  async getAllCountries() {
    const response = await this.countryRepository.getAllCountries();
    return response;
  }

  async getCountryById(code: string) {
    const response = await this.countryRepository.getCountryById(code);
    return response;
  }

  async getCountryFlag() {
    const response = await this.countryRepository.getCountryFlag();
    return response;
  }

  async getPopulation(){
    const response = await this.countryRepository.getPopulation();
    return response
  }
}