export type localString = string;
export type localBoolean = boolean;
export type localNumber = number;

export interface IVolumeInfo {
	title: localString;
	authors: localString[];
	description: localString;
	categories: localString[];
	imageLinks: { smallThumbnail: localString };
}
export interface IDataBook {
	data: {
		kind: localString;
		id: localNumber;
		etag: localString;
		selfLink: localString;
		volumeInfo: IVolumeInfo;
	};
	id?: localNumber;
}
export interface IPropertiesMap {
	volumeInfo: IVolumeInfo;
}

export interface IDataBooks {
	books: IDataBook;
}

export interface IPropsAction {
	action?: localString;
	payload: localString;
}
export interface IDataBooks {
	kind: localString;
	items: IDataBook[];
}

export interface IPropsButton {
	buttonName: localString;
	className?: localString;
	onClick?: () => void;
}

export interface IPropsInput {
	value?: localString;
	dispatch: (e: any) => string;
	setValue: (e: localString) => void;
}
export interface IPropsItem {
	state: {
		kind: localString;
		id: localNumber;
		etag: localString;
		selfLink: localString;
		volumeInfo: IVolumeInfo;
	};
	onClick: () => void;
}
export interface IPropsItems {
	kind: localString;
	id: localNumber;
	etag: localString;
	selfLink: localString;
	volumeInfo: IVolumeInfo;
}

export interface IStateItemsProps {
	state: IPropsItems[];
	sortingField: localString;
}
export interface IPropsSelect {
	dispatch:(e:any) => localString,
	value?: localString;
}

export interface IClearState {
	state: {
		kind: localString;
		id: localNumber;
		etag: localString;
		selfLink: localString;
		volumeInfo: IVolumeInfo;
	};
}

export interface ICurrentState {
	books: { book: IDataBook };
}
export interface IState {
	books: {
		books: IDataBook[];
		book: IDataBook;
		loading: localBoolean;
		error: localString;
		id: localNumber;
		searhcParams: localString;
		queryParams: localString;
	};
}

interface IItemProps {
	kind: localString;
	id: localNumber;
	etag: localString;
	selfLink: localString;
	volumeInfo: IVolumeInfo;
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
export interface IStateBooksProperties {
	books: IStateProperties;
}
