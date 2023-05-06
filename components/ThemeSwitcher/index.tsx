import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

export const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
    }
  }, [isDark]);

  return (
    <div
      className={styles.ThemeSwitcher}
      onClick={(e) => {
        setIsDark(!isDark);
      }}
    >
      <FontAwesomeIcon icon={faMoon} />
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </div>
  );
};
