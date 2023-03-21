import * as S from "./index.styles";
import Item from "./item";
import { useState, useEffect } from "react";
import { Button } from "components/button";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Items = ({ state }: any) => {
	const [stateArray, setStateArray] = useState([]);
	const [visible, setVisible] = useState(30);
	const isLoading = useSelector((state: any) => state.books.loading);
	console.log("isLoad", isLoading);

	const showMoreItems = () => {
		setVisible((prevValue) => prevValue + 30);
	};

	useEffect(() => {
		setStateArray(state);
	}, [state]);

	return (
		<S.Container>
			{isLoading ? (
				<RotatingLines
					strokeColor="#f3e7e7"
					strokeWidth="5"
					animationDuration="0.55"
					width="100"
					visible={true}
				/>
			) : !!stateArray ? (
				<>
					<span>Found {stateArray.length} books</span>
					<div className="container__content">
						{stateArray.slice(0, visible).map((element: any) => (
							<Item key={element.id} state={element} />
						))}
					</div>
					<Button onClick={showMoreItems} buttonName={"Show more"} />
				</>
			) : null}
		</S.Container>
	);
};

export default Items;
