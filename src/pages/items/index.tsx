import * as S from "./index.styles";
import Item from "./item";
import { useState, useEffect } from "react";
import { Button } from "components/button";
import { MagnifyingGlass } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { getIdBook } from "redux/reducer";

const Items = ({ state, sortingField }: any) => {
	const [stateArray, setStateArray] = useState([]);
	const [filteredArray, setFilteredArray] = useState([]);
	const [visible, setVisible] = useState(30);
	const dispatch = useDispatch();
	const isLoading = useSelector((state: any) => state.books.loading);

	const showMoreItems = () => {
		setVisible((prevValue) => prevValue + 30);
	};

	useEffect(() => {
		setStateArray(state);
		setFilteredArray(state)
	}, [state]);

	useEffect(() => {
		if(sortingField === 'All'){
			setFilteredArray(state)
		} else setFilteredArray(sortingFunction());
	}, [sortingField]);

	const sortingFunction = () => {
		return stateArray.filter((element: any) => {
			const sortingElement = element.volumeInfo.categories?.[0];
			const isHasMatches = sortingElement?.includes(sortingField);
			return isHasMatches;
		});
	};

	const handleIdBook = (id:any) => {
		dispatch(getIdBook(id))
		console.log('start')
	}

	return (
		<S.Container>
			{isLoading ? (
				<MagnifyingGlass
				visible={true}
				height="110"
				width="110"
				ariaLabel="MagnifyingGlass-loading"
				wrapperStyle={{ marginTop: "250px" }}
				wrapperClass="MagnifyingGlass-wrapper"
				glassColor = '#c0efff'
				color = '#bb7d81'
			 />
			) : !!filteredArray ? (
				<>
					{filteredArray.length > 0 ? (
						<span>Found {filteredArray.length} books</span>
					) : null}
					<div className="container__content">
						{filteredArray.slice(0, visible).map((element: any) => (
							<Item key={element.id} state={element} onClick={()=>handleIdBook(element.id)}/>
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
