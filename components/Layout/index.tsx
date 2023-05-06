import React from "react";
import { Header } from "../Layout/Header";
import styles from "./index.module.scss";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Layout__Slot}>{children}</div>
    </div>
  );
};
