import React from 'react';
import PropTypes from 'prop-types';

const FormFooter = ({ children }) => {
  return (
    <div className="form__footer">
      {children}
    </div>
  );
};

FormFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormFooter;
