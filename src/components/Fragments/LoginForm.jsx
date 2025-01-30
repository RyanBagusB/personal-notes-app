import React, { useContext } from 'react';
import FormHeader from '../Elements/Form/FormHeader';
import FormFooter from '../Elements/Form/FormFooter';
import FormBody from '../Elements/Form/FormBody';
import InputField from '../Elements/InputField';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';
import { authForm } from '../../utils/content';
import LocaleContext from '../../contexts/LocaleContext';

const LoginForm = ({ login }) => {
  const { locale } = useContext(LocaleContext);
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
 
    login({ email, password });
  }

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <FormHeader>{authForm[locale].header}</FormHeader>
      <FormBody>
        <InputField name="email" placeholder={authForm[locale].emailPlaceholder} type="email" onChange={onEmailChange} value={email}>
          {authForm[locale].email}
        </InputField>
        <InputField name="password" placeholder={authForm[locale].passwordPlaceholder} type="password" onChange={onPasswordChange} value={password}>
          {authForm[locale].password}
        </InputField>
      </FormBody>
      <FormFooter>
        <button>{authForm[locale].loginSubmit}</button>
      </FormFooter>
    </form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
