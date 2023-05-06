import React, { useState, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Button";
import { Field } from "../../components/CountryCard";
import { Country, countriesAPI } from "../../services/countries";

import styles from "../../styles/country.module.scss";

const CountryPage: NextPage<{ country: Country }> = ({
  country: countryValue,
}) => {
  const router = useRouter();
  const [country, setCountry] = useState<Country>(countryValue);
  const { name: countryName } = router.query;

  useEffect(() => {
    if (countryName)
      countriesAPI
        .searchCountryByName(String(countryName), true)
        .then((countries) => {
          const [first] = countries;
          setCountry(first);
        });
  }, [countryName]);

  return !country ? null : (
    <div>
      <Head>
        <title>{countryName}</title>
      </Head>
      <main>
        <div className={styles.CountryPage__ActionBar}>
          <Button onClick={(e) => router.back()}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
            <span className={styles.CountryPage__ButtonText}>Back</span>
          </Button>
        </div>
        <div className={styles.CountryPage__Content}>
          <img
            className={styles.CountryPage__Img}
            src={country.flags.svg}
            alt={String(countryName)}
          />
          <div className={styles.CountryPage__Info}>
            <h1 className={styles.CountryPage__Heading}>{countryName}</h1>
            <div className={styles.CountryPage__Sections}>
              <div>
                <Field title="Population" value={country.population} />
                <Field title="Region" value={country.region} />
                <Field title="Sub Region" value={country.subregion} />
                <Field title="Capital" value={country.capital} />
              </div>
              <div>
                <Field title="Top Level Domain" value={country.tld[0]} />
                <Field
                  title="Currencies"
                  value={Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(", ")}
                />
                <Field
                  title="Languages"
                  value={Object.values(country.languages).join(", ")}
                />
              </div>
            </div>
            {Boolean(country.borders?.length) && (
              <footer className={styles.CountryPage__Footer}>
                <p>Border Countries: </p>
                <div className={styles.CountryPage__Borders}>
                  {country.borders?.map((border) => (
                    <div className={styles.CountryPage__Border}>{border}</div>
                  ))}
                </div>
              </footer>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params: { name },
  } = context;
  // There is a problem whit this API, Calling it at server side won't resolve
  // const countries = await countriesAPI.searchCountryByName(String(name));

  return {
    props: {},
  };
};

export default CountryPage;
