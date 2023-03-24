import {
	ICurrentState,
	IDataBooks,
	IState,
	IStateBooksProperties,
} from "types";

export const urlBookId = (state: IDataBooks) => state.books.id;

export const bookImage = (state: ICurrentState) =>
	state.books.book.data?.volumeInfo.imageLinks.smallThumbnail;

export const bookName = (state: ICurrentState) =>
	state.books.book.data?.volumeInfo.title;

export const bookCategories = (state: ICurrentState) =>
	state.books.book.data?.volumeInfo.categories;

export const bookAuthors = (state: ICurrentState) =>
	state.books.book.data?.volumeInfo.authors;

export const bookDescription = (state: ICurrentState) =>
	state.books.book.data?.volumeInfo.description;

export const isLoading = (state: IState) => state.books?.loading;

export const state = (state: IStateBooksProperties) =>
	state.books.books.data?.items;
