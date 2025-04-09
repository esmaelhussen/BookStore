import PropTypes from 'prop-types';

function Progress({ progress }) {
  const { percent, chapter } = progress;
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 border-4 border-blue1 rounded-full border-l-w1" />
        <div>
          <p className="text-4xl">
            {percent}
            %
          </p>
          <p className="opacity-50">
            {percent === 100 ? 'Completed' : 'In Progress'}
          </p>
        </div>
      </div>
      <div className="w-0.5 bg-w1 mx-4 lg:mx-16 md:mx-8" />
      <div className="mr-4">
        <p className="opacity-50 uppercase text-sm">Current Chapter</p>
        <p className="text-lg">
          {`Chapter
          ${chapter}`}
        </p>
        <button
          type="button"
          className="text-white font-light font-serif px-6 py-2 rounded-md bg-primary cursor-pointer mt-8 bg-[#0290ff]"
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

Progress.propTypes = {
  progress: PropTypes.shape({
    chapter: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
};

export default Progress;
