import React, { useContext } from 'react';
import { notFound } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';

const NotFoundPage = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <section className="homepage-section">
      <h2 className="not-found-message">{notFound[locale].page}</h2>
    </section>
  );
};

export default NotFoundPage;
