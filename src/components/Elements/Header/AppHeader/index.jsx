import React, { useContext, useState } from 'react';
import { FaHome, FaArchive, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import LocaleSwitcher from '../LocaleSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';
import LogoHeader from '../LogoHeader';
import PropTypes from 'prop-types';
import LocaleContext from '../../../../contexts/LocaleContext';
import { navigation } from '../../../../utils/content';

const AppHeader = ({ logout, name }) => {
  const { locale } = useContext(LocaleContext);
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header__menu">
        <button onClick={toggleMenu}>☰</button>
      </div>
      <div className="header__username">
        <h2>{name}</h2>
      </div>
      <LocaleSwitcher />
      <ThemeSwitcher />
      <nav className={`header__navigation ${menuActive ? 'active' : ''}`}>
        <div className="header__navigation__header">
          <LogoHeader />
          <button onClick={toggleMenu}>x</button>
        </div>
        <ul className="header__navigation__list">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaHome />
              <span>{navigation[locale].homepage}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/archives" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaArchive />
              <span>{navigation[locale].archive}</span>
            </NavLink>
          </li>
          <li>
            <button onClick={logout}>
              <FaSignOutAlt />
              <span>{navigation[locale].logout}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

AppHeader.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default AppHeader;
