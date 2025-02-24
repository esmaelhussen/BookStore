import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        checkStatus: () => {
            return "Under construction"
        },
    }
})

export const { addBook, removeBook } = categoriesSlice.actions;

export default categoriesSlice.reducer;