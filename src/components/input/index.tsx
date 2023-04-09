import { FC } from 'react';
import { getBooks } from 'redux/reducer';
import React from 'react';
import { IPropsInput } from 'types';

import * as S from './index.styles';

const Input: FC<IPropsInput> = ({ value, setValue, dispatch }): JSX.Element => {

	const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	const handleChange = (e: React.KeyboardEvent): void => {
		if (e.key === 'Enter') {
			dispatch(getBooks(value));
		}
	};

	return (
		<S.ContainerInput
			type="text"
			placeholder="Введите название книги"
			onChange={handleValue}
			onKeyPress={handleChange}
		/>
	);
};

export default Input;
