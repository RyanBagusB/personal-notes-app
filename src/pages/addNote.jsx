import React, { useState } from 'react';
import Input from '../components/Elements/InputField/Input';
import RichTextField from '../components/Elements/InputField/RichTextField';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { addNoteLocale } from '../utils/content';

const MAX_TITLE_LENGTH = 50;

const AddNotePage = () => {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const onTitleChangeHandler = (event) => {
    if (event.target.value.length <= MAX_TITLE_LENGTH) {
      setTitle(event.target.value);
    }
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim() || !body.trim()) return;

    await addNote({ title, body });
    navigate('/');
  };

  return (
    <section className="homepage-section">
      <div className="heading">
        <h2>{addNoteLocale[locale].heading}</h2>
      </div>
      <form className="add-note-form" onSubmit={handleSubmit}>
        <p>{`${addNoteLocale[locale].remainingCharacters} ${MAX_TITLE_LENGTH - title.length}`}</p>
        <Input 
          placeholder={addNoteLocale[locale].titlePlaceholder} 
          value={title} 
          onChange={onTitleChangeHandler} 
        />
        <RichTextField 
          placeholder={addNoteLocale[locale].bodyPlaceholder} 
          value={body} 
          onChange={onBodyChangeHandler} 
        />
        <button type="submit">{addNoteLocale[locale].saveButton}</button>
      </form>
    </section>
  );
};

export default AddNotePage;
