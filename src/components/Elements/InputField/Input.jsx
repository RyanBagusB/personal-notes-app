import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      onChange={onChange}
      value={value}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
