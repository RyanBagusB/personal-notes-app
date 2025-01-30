import React from 'react';
import PropTypes from 'prop-types';

const FormBody = ({ children }) => {
  return (
    <div className="form__body">
      {children}
    </div>
  );
};

FormBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormBody;
