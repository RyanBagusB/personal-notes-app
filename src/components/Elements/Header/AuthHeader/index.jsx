import React from 'react';
import LocaleSwitcher from '../LocaleSwitcher';
import LogoHeader from '../LogoHeader';
import ThemeSwitcher from '../ThemeSwitcher';

const AuthHeader = () => {
  return (
    <header>
      <LogoHeader />
      <div className="header__option">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>

    </header>
  );
};

export default AuthHeader;
