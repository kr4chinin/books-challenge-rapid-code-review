import { FC } from "react";
import { useDispatch } from "react-redux";
import { getSortingBooks } from "redux/reducer";
import { IPropsSelect } from "types";
import * as S from "./index.styles";

const Select: FC<IPropsSelect> = ({ value }): JSX.Element => {
	const dispatch = useDispatch();

	const handleSortingBy = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const queryParams = `${value}&orderBy=${e.target.value}`;
		dispatch(getSortingBooks(queryParams));
	};

	return (
		<S.ContainerSelect
			onChange={handleSortingBy}
			name="sortingBy"
			id="sortingBy"
		>
			<option value="relevance">relevance</option>
			<option value="newest">newest</option>
		</S.ContainerSelect>
	);
};

export default Select;
