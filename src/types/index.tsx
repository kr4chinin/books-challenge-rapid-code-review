export type localString = string;

export interface IVolumeInfo {
	title: localString;
	authors: localString[];
}
export interface IDataBook {
	kind: localString;
	id: localString;
	etag: localString;
	selfLink: localString;
	volumeInfo: IVolumeInfo;
}

export interface IDataBooks {
	kind: localString;
	items: IDataBook[];
}


export interface IPropsButton {
	onClick:()=>void
}