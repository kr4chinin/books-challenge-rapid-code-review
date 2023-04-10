import { FC } from 'react';

import * as S from './index.styles';

export interface IVolumeInfo {
	title: string;
	authors: string[];
	description: string;
	categories: string[];
	imageLinks: { smallThumbnail: string };
}

export interface IPropsItem {
	state: {
		kind: string;
		id: number;
		etag: string;
		selfLink: string;
		volumeInfo: IVolumeInfo;
	};
	handleClick: () => void;
}

export const Item: FC<IPropsItem> = ({ state, handleClick }): JSX.Element => {
	const label = state.volumeInfo.imageLinks?.smallThumbnail;
	const name = state.volumeInfo.title;
	const category = state.volumeInfo.categories?.[0];
	const authors = state.volumeInfo.authors;

	return (
		<S.Container onClick={handleClick}>
			<S.Image src={label} alt="label of book" />
			<S.InlineString>
				<S.InlineStringUpper>Наименование:</S.InlineStringUpper>
				{name?.length ? name : 'Незветсно'}
			</S.InlineString>
			<S.InlineString>
				<S.InlineStringUpper>Категория:</S.InlineStringUpper>
				{category?.length ? category : 'Неизвестно'}
			</S.InlineString>
			<S.InlineString>
				<S.InlineStringUpper>Автор:</S.InlineStringUpper>
				{authors?.length ? authors : 'Неизвестно'}
			</S.InlineString>
		</S.Container>
	);
};

export default Item;
