import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { localBoolean, localString } from 'types';

interface IState {
	books: [];
	book: {};
	loading: boolean;
	error: string;
	id: number;
	searchParams: string | number | undefined;
	queryParams: string;
}

const initialState: IState = {
	books: [],
	book: {},
	loading: false,
	error: '',
	id: 0,
	searchParams: '',
	queryParams: '',
};

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setLoading: (state, action:PayloadAction<localBoolean>) => {
			state.loading = action.payload;
		},
		getBooks: (state, action: PayloadAction<string | number | undefined>) => {
			state.loading = true;
			state.searchParams = action.payload;
		},
		setBooks: (state, action) => {
			state.books = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		getSortingBooks: (state, action: PayloadAction<localString>) => {
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
	getBooks,
	setBooks,
	setBook,
	setError,
	getSortingBooks,
	getIdBook,
} = booksSlice.actions;
