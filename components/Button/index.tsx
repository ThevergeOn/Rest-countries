import React from "react";
import styles from "./index.module.scss";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ children, ...props }) => {
    return (
      <button className={styles.Button} {...props}>
        {children}
      </button>
    );
  };
