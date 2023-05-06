import axios from 'axios';

export const restCountriesClient = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  timeout: 10000
});

export { countriesAPI } from './countries';
