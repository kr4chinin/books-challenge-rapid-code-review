import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
	name: " books",
	initialState: {
		books: [],
		loading: false,
		error: "",
	},
	reducers: {
		setLoading: (state) => {
			state.loading = true;
		},
		unSetLoading: (state) => {
			state.loading = false;
		},
      getBooks:(state) => {
         state.loading = true
      },
		setBooks: (state, action) => {
			state.books = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		getSortingBooks: (state) => {
			state.loading = false
		}
	},
});

export const booksReducer = booksSlice.reducer;
export const { setLoading, unSetLoading,getBooks, setBooks, setError, getSortingBooks } =
	booksSlice.actions;
