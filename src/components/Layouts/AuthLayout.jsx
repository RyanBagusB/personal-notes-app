import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Elements/Footer';
import AuthHeader from '../Elements/Header/AuthHeader';

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <AuthHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
