import React, { useContext } from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header__theme-options">
      <input
        type="checkbox"
        id="header__theme-options__switch"
        checked={theme === 'light'}
        onChange={toggleTheme}
        hidden
      />
      <label htmlFor="header__theme-options__switch" className="header__theme-options__switch"></label>
    </div>
  );
};

export default ThemeSwitcher;
