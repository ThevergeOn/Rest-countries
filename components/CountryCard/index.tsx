import React from "react";
import { Country } from "../../services/countries";
import styles from "./index.module.scss";

export const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <div className={styles.CountryCard}>
      <img
        className={styles.CountryCard__Img}
        src={country.flags.svg}
        alt={country.name.official}
        loading="lazy"
      />
      <div className={styles.CountryCard__Content}>
        <h3 className={styles.CountryCard__Title}>{country.name.common}</h3>
        <div className={styles.CountryCard__Fields}>
          <Field title="Population" value={country.population} />
          <Field title="Region" value={country.region} />
          <Field title="Capital" value={country.capital} />
        </div>
      </div>
    </div>
  );
};

export const Field: React.FC<{ title: string; value: string | number }> = ({
  title,
  value,
}) => {
  return (
    <div className={styles.CountryCard__Field}>
      <span>{title}</span>: <span>{value}</span>
    </div>
  );
};
