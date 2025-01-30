import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import NoteAppLayout from './components/Layouts/NoteAppLayout';
import AuthLayout from './components/Layouts/AuthLayout';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import { getActiveNotes, getArchivedNotes, getUserLogged, putAccessToken } from './utils/network-data';
import HomePage from './pages/home';
import DetailNotePage from './pages/detailNote';
import AddNotePage from './pages/addNote';
import NotFoundPage from './pages/notFound';

const App = () => {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem('locale') || 'id';
  });

  const toggleTheme = () => {
    setTheme((prevState) => {
      return prevState === 'dark' ? 'light' : 'dark';
    });
  };

  const onLocaleChangeHandler = (event) => {
    setLocale(event.target.getAttribute('id'));
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const localeContextValue = useMemo(() => {
    return {
      locale,
      onLocaleChangeHandler,
    }
  }, [locale]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    navigate('/');
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchUserData();
  }, []);

  if (initializing) return null;
    
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <Routes>
          {authedUser ? (
            <Route path="/" element={<NoteAppLayout logout={onLogout} name={authedUser.name} />}>
              <Route index element={<HomePage getNotes={getActiveNotes} />} />
              <Route path="archives" element={<HomePage getNotes={getArchivedNotes} />} />
              <Route path="notes/:id" element={<DetailNotePage />} />
              <Route path="add-note" element={<AddNotePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          ) : (
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            </Route>
          )}
        </Routes>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
