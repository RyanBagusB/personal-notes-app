import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import PropTypes from 'prop-types';

const Card = ({ id, title, body, createdAt, archived, onDelete, onArchive, onUnarchive }) => {
  return (
    <div className='card'>
      <CardHeader
        id={id}
        title={title}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
      <CardBody body={body} />
      <CardFooter createdAt={createdAt} />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default Card;
