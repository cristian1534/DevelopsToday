import axios from "axios";

export const countryAvailable = async (URL) => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (err) {
    throw new Error("Failed to fetch countries");
  }
};

export const countryInfo = async (URL, countryCode) => {
  try {
    const result = await axios.get(`${URL}/${countryCode}`);
    return result.data;
  } catch (err) {
    throw new Error("Failed to fetch country information");
  }
};
