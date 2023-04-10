import { FC } from 'react';
import { getBooks } from 'redux/reducer';
import React from 'react';

import * as S from './index.styles';

interface IPropsInput {
	value?: string;
	dispatch: (e: any) => string;
	setValue: (e: string) => void;
}

const Input: FC<IPropsInput> = ({ value, setValue, dispatch }): JSX.Element => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	const handleKeyPress = (e: React.KeyboardEvent): void => {
		if (e.key === 'Enter') {
			dispatch(getBooks(value));
		}
	};

	return (
		<S.ContainerInput
			type="text"
			placeholder="Введите название книги"
			onChange={handleChange}
			onKeyPress={handleKeyPress}
		/>
	);
};

export default Input;
