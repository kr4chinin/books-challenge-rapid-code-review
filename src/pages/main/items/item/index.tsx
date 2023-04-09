import { FC } from 'react';
import { IPropsItem } from 'types';

import * as S from './index.styles';

export const Item: FC<IPropsItem> = ({ state, onClick }): JSX.Element => {
	const label = state.volumeInfo.imageLinks?.smallThumbnail;
	const name = state.volumeInfo.title;
	const category = state.volumeInfo.categories?.[0];
	const authors = state.volumeInfo.authors;

console.log('label', label);
console.log('name', name);
console.log('category', category);
console.log('authors', authors);

	return (
		<S.Container onClick={onClick}>
			<img src={label} alt="label of book" />
			<span className="nameOfcompany">
				<span className="upperName">Наименование:</span>
				{name?.length ? name : 'Незветсно'}
			</span>
			<span className="categoryOfcompany">
				<span className="upperName">Категория:</span>
				{category?.length ? category : 'Неизвестно'}
			</span>
			<span className="authorOfcompany">
				<span className="upperName">Автор:</span>
				{authors?.length ? authors : 'Неизвестно'}
			</span>
		</S.Container>
	);
};

export default Item;
