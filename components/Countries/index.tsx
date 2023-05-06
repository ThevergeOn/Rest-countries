import React from "react";
import Link from "next/link";
import { Country } from "../../services/countries";
import { CountryCard } from "../CountryCard";
import styles from "./index.module.scss";

export const Countries: React.FC<{ countires: Country[] }> = ({
  countires,
}) => {
  return (
    <div className={styles.Countries}>
      {countires.map((country) => (
        <Link key={country.name.common} href={`country/${country.name.common}`}>
          <a>
            <CountryCard country={country} />
          </a>
        </Link>
      ))}
    </div>
  );
};
