import React, { useState, useEffect, useContext } from 'react';
import parser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import { notFound } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';

const DetailNotePage = () => {
  const { locale } = useContext(LocaleContext);
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await getNote(id);
      setNote(data);
    };

    fetchNote();
  }, [id]);

  return (
    <section className="homepage-section">
      {note ? (
        <>
          <div className="detail-note__header">
            <h2>{note.title}</h2>
          </div>
          <div className="detail-note__body">
            <div>{parser(note.body)}</div>
          </div>
        </>
      ) : (
        <p className="detail-note__empty">{notFound[locale].detailNote}</p>
      )}
    </section>
  );
};

export default DetailNotePage;
