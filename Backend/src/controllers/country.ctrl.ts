import { CountryService } from "../services/country.services";
import { Request, Response } from "express";

export class CountryController {

  private countryService: CountryService;

  constructor() {
    this.countryService = new CountryService();
  }

  getAllCountries = async (req: Request, res: Response): Promise<any> => {
    try {
      const result = await this.countryService.getAllCountries();
      res.json(result);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  getCountryById = async (req: Request, res: Response): Promise<any> => {
    try {
      const { code } = req.params;
      const result = await this.countryService.getCountryById(code);
      const flags = await this.countryService.getCountryFlag();
      const countryFlag = flags.data.find((flag:any) => flag.iso2.toLowerCase() === code.toLowerCase());
      const population = await this.countryService.getPopulation();
      const countryPopulation = population.data.find((pop:any) => pop.country.toLowerCase() === result.commonName.toLowerCase());
      

      res.json({ ...result, flag: countryFlag?.flag, population: countryPopulation?.populationCounts });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
