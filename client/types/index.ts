export type CountryType = {
  countryCode: string;
  name: string;
};

export type BorderCountry = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderCountry[] | null; 
};

export type Country = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderCountry[]; 
};

