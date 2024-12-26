export type TCard = {
  countryCode: string;
  name: string;
};

export type TCodeParams = {
  code: string;
};

export type TPopulations = {
  year: number;
  value: number;
}

export type TBorders = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export type TBor = {
  borders: TBorders[];
  commonName: string;
  countryCode: string;
  flag: string;
  officialName: string;
  population: TPopulations[];
  region: string;
}

