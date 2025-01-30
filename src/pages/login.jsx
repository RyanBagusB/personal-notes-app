import React, { useContext } from 'react';
import LoginForm from '../components/Fragments/LoginForm';
import { Link } from 'react-router-dom';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import { authForm } from '../utils/content';

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);
  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="auth-section">
      <LoginForm login={onLogin} />
      <div className="auth-section__option">
        <p>{authForm[locale].dontHaveAccount}</p>
        <Link to="/register">{authForm[locale].registerLink}</Link>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
