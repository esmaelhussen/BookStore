import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categorysReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categorysReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
