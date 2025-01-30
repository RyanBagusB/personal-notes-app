import React from 'react';
import PropTypes from 'prop-types';

const FormHeader = ({ children }) => {
  return (
    <div className="form__header">
      <h2>{children}</h2>
    </div>
  );
};

FormHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormHeader;
