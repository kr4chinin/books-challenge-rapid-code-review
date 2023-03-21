import * as S from "./index.styles";
import Item from "./item";
import { useState, useEffect } from "react";

const Items = ({ state }: any) => {
	console.log("arrayQuestion", Array.isArray(state));
	const [stateArray, setStateArray] = useState([]);
	console.log("state in items", state);

	useEffect(() => {
		setStateArray(state);
	}, [state]);

	return (
		<S.Container>
			{stateArray
				? stateArray.map((element: any) => (
						<Item key={element.id} state={element} />
				  ))
				: null}
		</S.Container>
	);
};

export default Items;
