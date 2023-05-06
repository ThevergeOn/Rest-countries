import { restCountriesClient } from '.';

export interface Country {
  capital: string;
  region: string;
  subregion: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  languages: Record<string, string>;
  currencies: Record<string,{name: string,symbol: string}>;
  borders: string[];
  tld: string[];
  name: {
    common: string;
    nativeName: { eng: { official: string; common: string } };
    official: string;
  };
}

export const countriesAPI = {
  getAllCountries() {
    return restCountriesClient.get<Array<Country>>('/all').then(res=> res.data);
  },
  searchCountryByName(name: string,fullText?: boolean) {
    return restCountriesClient.get<Array<Country>>(`/name/${name.toLowerCase()}${fullText ? '?fullText=true': ''}`).then(res=>res.data);
  },
  getCountryByRegion(region: string) {
    return restCountriesClient.get<Array<Country>>(`/region/${region}`).then(res=> res.data);
  },
};
