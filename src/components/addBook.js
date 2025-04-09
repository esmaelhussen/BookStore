import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { createBook } from '../redux/books/books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const newBook = {
      item_id: nanoid(),
      title,
      author,
      category: 'Entertainment',
    };
    dispatch(createBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2 className="font-bold text-lg opacity-60">ADD NEW BOOK</h2>
      <form
        className="flex gap-8 mt-5 flex-col md:flex-row"
        onSubmit={handleAddBook}
      >
        <input
          type="text"
          placeholder="Book title "
          value={title}
          onChange={handleTitleChange}
          className="p-3 border border-w1 bg-white text-base w-[100%] md:w-[50%] "
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
          className="p-3 border border-w1 bg-white text-base w-[100%] md:w-[50%]"
          required
        />
        <button type="submit" className="text-white font-bold font-serif px-6 py-2 rounded-md bg-[#0290ff] cursor-pointer md:w-[30%] mx-auto">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
