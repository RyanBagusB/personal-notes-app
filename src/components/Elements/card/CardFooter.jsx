import React, { useContext } from 'react';
import { showFormattedDate } from '../../../utils';
import PropTypes from 'prop-types';
import LocaleContext from '../../../contexts/LocaleContext';

const CardFooter = ({ createdAt }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="card__footer">
      <p>{showFormattedDate(createdAt, locale)}</p>
    </div>
  );
};

CardFooter.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default CardFooter;