import React from 'react';
import PropTypes from 'prop-types';

const RichTextField = ({ placeholder, onChange }) => {
  return (
    <div
      data-placeholder={placeholder}
      className="input contenteditable"
      contentEditable
      onInput={onChange}
    />
  );
};

RichTextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RichTextField;
