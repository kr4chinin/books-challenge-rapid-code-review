import { useDispatch } from "react-redux";
import { getSortingBooks } from "redux/reducer";
import * as S from "./index.styles";

const Select = ({ value }:any) => {
	const dispatch = useDispatch();

	const handleSortingBy = (e: any) => {
		const queryParams = `${value}&orderBy=${e.target.value}`
		//@ts-ignore
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
