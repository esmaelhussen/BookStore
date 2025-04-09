import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <section className="p-[5%] bg-w2">
      <div className="flex flex-col gap-4">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </div>
      <div className="h-0.5 w-[100%] my-8 bg-w1" />
      <AddBook />
    </section>
  );
}

export default Books;
