import React, { useContext } from 'react';
import FormHeader from '../Elements/Form/FormHeader';
import FormFooter from '../Elements/Form/FormFooter';
import FormBody from '../Elements/Form/FormBody';
import InputField from '../Elements/InputField';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';
import { authForm } from '../../utils/content';
import LocaleContext from '../../contexts/LocaleContext';

const RegisterForm = ({ register }) => {
  const { locale } = useContext(LocaleContext);
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [passwordConfirmation, onPasswordConfirmationChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      alert('Password and confirmation password must same');
      return;
    }
 
    register({ name, email, password });
  }

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <FormHeader>{authForm[locale].header}</FormHeader>
      <FormBody>
        <InputField name="name" placeholder={authForm[locale].namePlaceholder} type="text" onChange={onNameChange} value={name}>
          {authForm[locale].name}
        </InputField>
        <InputField name="email" placeholder={authForm[locale].emailPlaceholder} type="email" onChange={onEmailChange} value={email}>
          {authForm[locale].email}
        </InputField>
        <InputField name="password" placeholder={authForm[locale].passwordPlaceholder} type="password" onChange={onPasswordChange} value={password}>
          {authForm[locale].password}
        </InputField>
        <InputField name="passwordConfirmation" placeholder={authForm[locale].passwordConfirmationPlaceholder} onChange={onPasswordConfirmationChange} type="password" value={passwordConfirmation}>
          {authForm[locale].passwordConfirmation}
        </InputField>
      </FormBody>
      <FormFooter>
        <button>{authForm[locale].registerSubmit}</button>
      </FormFooter>
    </form>
  );
};

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
