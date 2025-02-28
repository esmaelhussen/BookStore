import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import AddBook from './addBook';

function Books() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  console.log('books', books);

  return (
    <div className="p-[5%] bg-w2">
      {books.map((book) => (
        <div key={book.id} className=" bg-white py-6 px-[5%]">
          <h3>{book.title}</h3>
          <p>
            Author:
            {' '}
            {book.author}
          </p>
          <p>
            Category:
            {' '}
            {book.category}
          </p>
          <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
        </div>
      ))}
      <AddBook />
    </div>
  );
}

export default Books;
