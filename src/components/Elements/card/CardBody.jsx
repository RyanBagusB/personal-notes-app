import React from 'react';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

const CardBody = ({ body }) => {
  return (
    <div className="card__body">
      <div>{parser(body)}</div>
    </div>
  );
};

CardBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default CardBody;