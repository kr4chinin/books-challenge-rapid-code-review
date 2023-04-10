import { FC } from 'react';
import { getSortingBooks } from 'redux/reducer';

import * as S from './index.styles';

export interface IPropsSelect {
	dispatch: (e: any) => string;
	value?: string;
}

const Select: FC<IPropsSelect> = ({ value, dispatch }): JSX.Element => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const queryParams = `${value}&orderBy=${e.target.value}`;
		dispatch(getSortingBooks(queryParams));
	};

	return (
		<S.ContainerSelect
			onChange={handleChange}
			name="sortingBy"
			id="sortingBy"
		>
			<option value="relevance">relevance</option>
			<option value="newest">newest</option>
		</S.ContainerSelect>
	);
};

export default Select;
