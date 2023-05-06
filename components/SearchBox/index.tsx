import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

export const SearchBox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> =
  ({ children, ...props }) => {
    return (
      <div className={styles.SearchBox}>
        <div className={styles.SearchBox__Icon}>
          <FontAwesomeIcon icon={faSearch} color="var(--gray)" />
        </div>
        <input
          className={styles.SearchBox__Input}
          type="text"
          placeholder="Search for a Country..."
          {...props}
        />
      </div>
    );
  };
