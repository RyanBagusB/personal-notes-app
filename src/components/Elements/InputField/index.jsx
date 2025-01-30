import React from 'react';
import Label from './Label';
import Input from './Input';
import PropTypes from 'prop-types';

const InputField = ({ children, name, type, placeholder, onChange, value }) => {
  return (
    <div className="form__body__input-field">
      <Label name={name}>{children}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

InputField.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputField;
