import React from 'react';
import { FaBox, FaBoxOpen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardHeader = ({ id, title, archived, onDelete, onArchive, onUnarchive }) => {
  return (
    <div className="card__header">
      <h3 className="card__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>

      <div className="card__action">
        <button onClick={onDelete}>
          <FaTrash />
        </button>
        {archived ? (
          <button onClick={onUnarchive}>
            <FaBoxOpen />
          </button>
        ) : (
          <button onClick={onArchive}>
            <FaBox />
          </button>
        )}
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default CardHeader;