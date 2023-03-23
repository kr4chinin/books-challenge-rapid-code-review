import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
	name: "books",
	initialState: {
		books: [],
		book: {},
		loading: false,
		error: "",
		id: 0,
		searchParams: "",
		queryParams: "",
	},
	reducers: {
		setLoading: (state) => {
			state.loading = true;
		},
		unSetLoading: (state) => {
			state.loading = false;
		},
		getBooks: (state, action) => {
			state.loading = true;
			state.searchParams = action.payload;
		},
		setBooks: (state, action) => {
			state.books = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		getSortingBooks: (state, action) => {
			state.loading = false;
			state.queryParams = action.payload;
		},
		getIdBook: (state, action) => {
			state.id = action.payload;
		},
		setBook: (state, action) => {
			state.book = action.payload;
		},
	},
});

export const booksReducer = booksSlice.reducer;
export const {
	setLoading,
	unSetLoading,
	getBooks,
	setBooks,
	setBook,
	setError,
	getSortingBooks,
	getIdBook,
} = booksSlice.actions;
