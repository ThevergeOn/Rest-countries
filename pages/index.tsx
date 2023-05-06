import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { Countries } from "../components/Countries";
import { SearchBox } from "../components/SearchBox";
import { Select, OptionType } from "../components/Select";
import { countriesAPI, Country } from "../services/countries";

import styles from "../styles/home.module.scss";
import { GetServerSideProps, NextPage } from "next";

const OPTOINS: Array<OptionType> = [
  { title: "Africa", value: "Africa" },
  { title: "America", value: "America" },
  { title: "Asia", value: "Asia" },
  { title: "Europe", value: "Europe" },
  { title: "Oceania", value: "Oceania" },
];

const HomePage: NextPage<{ countries: Array<Country> }> = ({
  countries: initialCountries = [],
}) => {
  const [countries, setCountries] = useState<Array<Country>>(initialCountries);
  const [activeRegion, setActiveRegion] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useCallback(
    debounce((term) => {
      countriesAPI
        .searchCountryByName(term)
        .then(setCountries)
        .catch(console.error);
    }, 100),
    []
  );

  // Get all countries and search on searchTerm update
  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    } else {
      countriesAPI.getAllCountries().then(setCountries).catch(console.error);
    }
  }, [searchTerm]);

  // search on activeRegion update
  useEffect(() => {
    if (activeRegion) {
      countriesAPI
        .getCountryByRegion(activeRegion)
        .then(setCountries)
        .catch(console.log);
    }
  }, [activeRegion]);

  return (
    <div className={styles.HomePage}>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <main className={styles.HomePage__Main}>
        <div className={styles.HomePage__ActionBar}>
          <SearchBox
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            options={OPTOINS}
            value={activeRegion}
            handleChange={(value) => {
              setActiveRegion(String(value));
            }}
          />
        </div>
        {Boolean(countries.length) ? (
          <Countries countires={countries} />
        ) : (
          <p className={styles.Loading}>Loading...!</p>
        )}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // There is a problem whit this API, Calling it at server side won't resolve
  // const countries = await countriesAPI.getAllCountries();

  return {
    props: {
      // countries,
    },
  };
};

export default HomePage;
