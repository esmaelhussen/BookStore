import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CREATE_BOOK = 'books/CREATE_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const GET_BOOKS = 'books/GET_BOOKS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pl5G5wcNyMGN6n0lX0tS/books';
const initialBooks = [];

/* eslint-disable default-param-last */
export default (state = initialBooks, action) => {
  switch (action.type) {
    case `${CREATE_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    case `${GET_BOOKS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const createBook = createAsyncThunk(CREATE_BOOK, async (book) => {
  await axios.post(URL, book);
  return book;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${URL}/${id}`);
  return id;
});

export const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await axios.get(URL);
  const data = Object.keys(response.data).map((id) => ({
    item_id: id,
    ...response.data[id][0],
  }));
  return data;
});
