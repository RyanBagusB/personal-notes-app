import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Elements/Footer';
import AppHeader from '../Elements/Header/AppHeader';
import PropTypes from 'prop-types';

const NoteAppLayout = ({ logout, name }) => {
  return (
    <div className="app-container">
      <AppHeader logout={logout} name={name} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

NoteAppLayout.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
 
export default NoteAppLayout;