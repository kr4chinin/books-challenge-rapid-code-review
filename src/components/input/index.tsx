import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./index.styles";
import { getBooks } from "redux/reducer";
import React from "react";

const Input: FC<any> = ({value,  setValue}): JSX.Element => {
	const dispatch = useDispatch();
	

	const handleValue = (e: any) => {
		setValue(e.target.value);
	};

	const handleChange = (e: React.KeyboardEvent): void => {
		if (e.key === "Enter") {
			dispatch(getBooks(value));
		}
	};

	return (
		<S.ContainerInput
				type="text"
				placeholder="Введите название книги"
				onChange={handleValue}
				onKeyPress={handleChange} />
	);
};

export default Input;
