import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
  books: [];
  book: {};
  loading: boolean;
  error: string;
  id: number;
  searchParams: any;
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    getBooks: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.searchParams = action.payload;
    },
    setBooks: (state, action: PayloadAction<any>) => {
      state.books = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    getSortingBooks: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.queryParams = action.payload;
    },
    getIdBook: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setBook: (state, action: PayloadAction<any>) => {
      state.book = action.payload;
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { setLoading, getBooks, setBooks, setBook, setError, getSortingBooks, getIdBook } =
  booksSlice.actions;
