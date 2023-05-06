import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

export interface OptionType {
  title: string;
  value: string | number;
}
interface SelectProps {
  value: string | number;
  options: Array<OptionType>;
  handleChange: (value: SelectProps["value"]) => void;
}

export const Select: React.FC<SelectProps> = ({
  value,
  options = [],
  handleChange,
  ...props
}) => {
  return (
    <div role="select" tabIndex={-1} className={styles.Select} {...props}>
      <div className={styles.Select__value}>
        {value ? value : "Filter by Region"}
      </div>
      <div className={styles.Select__Icon}>
        {" "}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className={styles.Select__Options}>
        {options.map((option) => (
          <div
            key={option.value}
            className={styles.Select__Option}
            onClick={(e) => {
              const parent = (e.target as HTMLDivElement).parentNode
                .parentNode as HTMLDivElement;
              parent.blur();
              handleChange(option.value);
            }}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};
