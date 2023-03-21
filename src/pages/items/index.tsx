import * as S from "./index.styles";
import Item from "./item";
import { useState, useEffect } from "react";
import { Button } from "components/button";

const Items = ({ state }: any) => {
	const [stateArray, setStateArray] = useState([]);
	const [visible, setVisible] = useState(30);

	const showMoreItems = () => {
		setVisible((prevValue)=>prevValue + 30)
	}


	useEffect(() => {
		setStateArray(state);
	}, [state]);

	return (
		<S.Container>
		<div className='container__content'>{stateArray
				? stateArray
						.slice(0, visible)
						.map((element: any) => <Item key={element.id} state={element} />)
				: null}
				</div>
			
			{stateArray ? (<Button onClick={showMoreItems} buttonName={'Show more'}/>):(null)}	
		</S.Container>
	);
};

export default Items;
