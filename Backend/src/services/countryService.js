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

export const countryPopulation = async (URL) => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (err) {
    throw new Error("Failed to fetch country population");
  }
};

export const countryBorders = async (URL, countryCode) => {
  try {
    const result = await axios.get(`${URL}/${countryCode}`);
    return result.data;
  } catch (err) {
    throw new Error("Failed to fetch country borders");
  }
};

export const countryFlags = async (URL) => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (err) {
    throw new Error("Failed to fetch flags");
  }
};