import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/Fragments/RegisterForm';
import { register } from '../utils/network-data';
import { authForm } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
 
  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className="auth-section">
      <RegisterForm register={onRegisterHandler} />
      <div className="auth-section__option">
        <p>{authForm[locale].haveAccount}</p>
        <Link to="/">{authForm[locale].loginLink}</Link>
      </div>
    </section>
  );
};

export default RegisterPage;
