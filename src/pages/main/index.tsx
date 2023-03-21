import Input from "components/input";
import Items from "pages/items";
import { FC } from "react";
import { useSelector } from "react-redux";
import * as S from "./index.styles";

const Main: FC = (): JSX.Element => {
	const state = useSelector((state:any)=>state.books.books.data?.items);

console.log('state', state)


	return (
		<S.ContainerMain>
			<Input />
			<Items state={state}/>
		</S.ContainerMain>
	);
};

export default Main;
