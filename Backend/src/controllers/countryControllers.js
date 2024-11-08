import { countryAvailable } from "../services/countryService.js";
import { API_URL } from "../utils/api.js";

export const countryController = async (req, res) => {
  try {
    const countries = await countryAvailable(API_URL);
    if (!countries)
      return res.status(404).json({ message: "Countries not found" });

    res.status(200).json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
