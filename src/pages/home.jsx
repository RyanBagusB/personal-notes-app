import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Input from '../components/Elements/InputField/Input';
import NoteList from '../components/Fragments/NoteList';
import { archiveNote, deleteNote, unarchiveNote } from '../utils/network-data';
import NoteSkeleton from '../components/Fragments/NoteSkeleton';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { homeLocale } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';

const HomePage = ({ getNotes }) => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotesData = async () => {
      setLoading(true);
      setKeyword(() => searchParams.get('title') || '');
      const { data } = await getNotes();
      setNotes(data);
      setLoading(false);
    };

    fetchNotesData();
  }, [getNotes]);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);

    const { data } = await getNotes();
    setNotes(data);
  }

  const onArchiveHandler = async (id) => {
    await archiveNote(id);

    const { data } = await getNotes();
    setNotes(data);
  }

  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);

    const { data } = await getNotes();
    setNotes(data);
  }

  const onKeywordChangeHandler = (event) => {
    setKeyword(event.target.value);
    setSearchParams({ title: event.target.value });
  };

  const onAddNoteHandler = () => {
    navigate('/add-note');
  };
  
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  
  return (
    <section className="homepage-section">
      <div className="heading">
        <h2>{homeLocale[locale].heading}</h2>
      </div>
      <div className="search-container">
        <Input type="search" name="title" placeholder={homeLocale[locale].searchPlaceholder} onChange={onKeywordChangeHandler} value={keyword} />
      </div>
      {loading ? (
        <NoteSkeleton />
      ) : (
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler} />
      )}
      <button onClick={onAddNoteHandler} className="add-note-button"><FaPlus /></button>
    </section> 
  );
};

HomePage.propTypes = {
  getNotes: PropTypes.func.isRequired,
};

export default HomePage;
