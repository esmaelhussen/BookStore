import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    if (title && author) {
      dispatch(addBook({
        id: nanoid(),
        title,
        author,
      }));

      setTitle('');
      setAuthor('');
    }
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="font-bold text-lg opacity-60">ADD NEW BOOK</h2>
      <form className="flex gap-8 mt-5 flex-col md:flex-row">
        <input
          type="text"
          placeholder="Book title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border border-w1 bg-white text-base w-[100%] md:w-[50%]"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-3 border border-w1 bg-white text-base w-[100%] md:w-[50%]"
        />
        <button type="submit" onClick={handleAddBook} className="text-white font-bold font-serif px-6 py-2 rounded-md bg-[#0290ff] cursor-pointer md:w-[30%] mx-auto">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
