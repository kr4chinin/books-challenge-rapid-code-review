import * as S from "./index.styles";
import Item from "./item";
import { useState, useEffect } from "react";
import { Button } from "components/button";
import { MagnifyingGlass } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getIdBook } from "redux/reducer";
import { Link } from "react-router-dom";
import { FC } from "react";
import {
	IPropertiesMap,
	IPropsItems,
	IStateItemsProps,
	localNumber,
} from "types";
import { isLoading, urlBookId } from "redux/selectors";

const Items: FC<IStateItemsProps> = ({ state, sortingField }): JSX.Element => {
	const [stateArray, setStateArray] = useState<IPropsItems[]>([]);
	const [filteredArray, setFilteredArray] = useState<IPropsItems[]>([]);
	const [visible, setVisible] = useState<localNumber>(30);
	const dispatch = useDispatch();
	const loading = useSelector(isLoading);
	const id = useSelector(urlBookId);

	const showMoreItems = () => {
		setVisible((prevValue) => prevValue + 30);
	};

	useEffect(() => {
		dispatch(getBooks(id));
	}, []);

	useEffect(() => {
		setStateArray(state);
		setFilteredArray(state);
	}, [state]);

	useEffect(() => {
		if (sortingField === "All") {
			setFilteredArray(state);
		} else setFilteredArray(sortingFunction());
	}, [sortingField]);

	const sortingFunction = () => {
		return stateArray.filter((element: IPropertiesMap) => {
			const sortingElement = element.volumeInfo.categories?.[0];
			const isHasMatches = sortingElement?.includes(sortingField);
			return isHasMatches;
		});
	};
	const handleIdBook = (id: localNumber): void => {
		dispatch(getIdBook(id));
	};

	return (
		<S.Container>
			{loading ? (
				<MagnifyingGlass
					visible={true}
					height="110"
					width="110"
					ariaLabel="MagnifyingGlass-loading"
					wrapperStyle={{ marginTop: "250px" }}
					wrapperClass="MagnifyingGlass-wrapper"
					glassColor="#c0efff"
					color="#bb7d81"
				/>
			) : !!filteredArray ? (
				<>
					{filteredArray.length > 0 ? (
						<>
							<span className="counterBooks">
								Found<span className="counter">{filteredArray.length}</span>
								<span className="counterBooks">books</span>
							</span>
						</>
					) : null}
					<div className="container__content">
						{filteredArray.slice(0, visible).map((element: IPropsItems) => (
							<Link to={`${element.id}`} key={element.id}>
								<Item
									state={element}
									onClick={() => handleIdBook(element.id)}
								/>
							</Link>
						))}
					</div>
					{filteredArray.length > 30 && stateArray.length > visible ? (
						<Button onClick={showMoreItems} buttonName={"Show more"} />
					) : null}
				</>
			) : null}
		</S.Container>
	);
};

export default Items;
