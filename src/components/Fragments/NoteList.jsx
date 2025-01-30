import React, { useContext } from 'react';
import Card from '../Elements/card';
import PropTypes from 'prop-types';
import LocaleContext from '../../contexts/LocaleContext';
import { notFound } from '../../utils/content';

const NoteList = ({ notes, onDelete, onArchive, onUnarchive }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className={`card-container ${notes.length < 1 ? 'empty' : ''}`}>
      {notes.length > 0 ? (
        notes.map((note) => (
          <Card
            key={note.id}
            {...note}
            onDelete={() => onDelete(note.id)}
            onArchive={() => onArchive(note.id)}
            onUnarchive={() => onUnarchive(note.id)}
          />
        ))
      ) : (
        <p className="card-container__empty">{notFound[locale].note}</p>
      )}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteList;