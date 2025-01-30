import React, { useContext, useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import LocaleContext from '../../../contexts/LocaleContext';

const LocaleSwitcher = () => {
  const { locale, onLocaleChangeHandler } = useContext(LocaleContext);
  const [localeOption, setLocaleOption] = useState(false);

  const localeOptionToggle = () => {
    setLocaleOption((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="header__locale-options">
      <button onClick={localeOptionToggle}>
        <FaGlobe />
      </button>
      <ul className={localeOption ? 'active' : ''}>
        <li>
          <button className={locale === 'id' ? 'active' : ''} onClick={onLocaleChangeHandler} id="id">Indonesia</button>
        </li>
        <li>
          <button className={locale === 'en' ? 'active' : ''} onClick={onLocaleChangeHandler} id="en">English</button>
        </li>
      </ul>
    </div>
  );
};

export default LocaleSwitcher;
