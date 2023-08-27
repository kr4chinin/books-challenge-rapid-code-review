import { IVolumeInfo } from 'pages/main/items/item';
import { IDataBook } from 'redux/saga/sagaGetBookByID';

export interface IDataBooks {
	kind: string;
	items: IDataBook[];
}

export interface ICurrentState {
	books: { book: IDataBook };
}

export interface IStateBooksProperties {
	books: IStateProperties;
}

export interface IProps {
	items: IItemProps[];
}
export interface IProperties {
	data: IProps;
}

export interface IStateProperties {
	books: IProperties;
}

interface IItemProps {
	kind: string;
	id: number;
	etag: string;
	selfLink: string;
	volumeInfo: IVolumeInfo;
}

export interface IState {
	books: {
		books: IDataBook[];
		book: IDataBook; 
		loading: boolean;
		error: string;
		id: number;
		searhcParams: string;
		queryParams: string;
	};
}

export const urlBookId = (state: IState) => state.books.id;

export const isLoading = (state: IState) => state.books?.loading;

export const state = (state: IStateBooksProperties) =>
	state.books.books.data?.items;

export const bookData = (state: ICurrentState) =>
	state.books?.book?.data?.volumeInfo ?? [];

export const imageLinks = (state: ICurrentState) =>
	state.books.book?.data?.volumeInfo?.imageLinks?.smallThumbnail ?? '';
