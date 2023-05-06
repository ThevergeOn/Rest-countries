import React from "react";
import { ThemeSwitcher } from "../../ThemeSwitcher";
import styles from "./index.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <h1>Where in the world?</h1>
      <ThemeSwitcher />
    </header>
  );
};
