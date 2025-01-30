import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ name, children }) => {
  return (
    <label htmlFor={name}>
      {children}
    </label>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
