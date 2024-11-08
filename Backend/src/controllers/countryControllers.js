import { countryAvailable, countryInfo } from "../services/countryService.js";
import { API_URL_INFO } from "../utils/api.js";

export const countryAvailableController = async (req, res) => {
  try {
    const countries = await countryAvailable(API_URL);
    if (!countries)
      return res.status(404).json({ message: "Countries not found" });

    res.status(200).json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const countryInfoController = async (req, res) => {
  try {
    const { countryCode } = req.params;
    const countryData = await countryInfo(API_URL_INFO, countryCode);
    if (!countryInfo)
      return res.status(404).json({ message: "Country not found" });

    res.status(200).json(countryData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
