import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Action({ id }) {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="flex items-center flex-col md:flex-row">
      <button
        type="button"
        className="font-serif cursor-pointer font-light text-sm text-secondary"
      >
        Comment
      </button>
      <div className="my-2 md:mx-4 bg-w1 w-16 md:h-6 h-0.5 md:w-0.5" />
      <button
        type="button"
        className="font-serif cursor-pointer font-light text-sm text-secondary"
        onClick={removeBookHandler}
      >
        Remove
      </button>
      <div className="my-2 md:mx-4 bg-w1 w-16 md:h-6 h-0.5 md:w-0.5" />
      <button
        type="button"
        className="font-serif cursor-pointer font-light text-sm text-secondary"
      >
        Edit
      </button>
    </div>
  );
}
Action.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Action;
