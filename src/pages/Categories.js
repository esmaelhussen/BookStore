import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleStatusCheck = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="p-[5%] bg-w2">
      <button
        type="button"
        className=" text-white font-bold font-serif px-6 py-2 rounded-md bg-[#0290ff] cursor-pointer w-[20%] items-center"
        onClick={handleStatusCheck}
      >
        Check status
      </button>
      <div>{categories}</div>
    </div>
  );
}

export default Categories;
