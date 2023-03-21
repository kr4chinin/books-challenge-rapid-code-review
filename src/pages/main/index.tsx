import { Button } from "components/button";
import Input from "components/input";
import Items from "pages/items";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "redux/reducer";
import * as S from "./index.styles";

const Main: FC = (): JSX.Element => {
	const state = useSelector((state:any)=>state.books.books.data?.items);
	const dispatch = useDispatch();
	const [value, setValue] = useState()
	
	const triggerLoadData = () => {
	dispatch(getBooks(value))
}

	return (
		<S.ContainerMain>
			<div className="header">
			<Input  value={value} setValue={setValue}/>
			<Button onClick={triggerLoadData}  buttonName={'Search'}/>
			</div>
			<Items state={state}/>
		</S.ContainerMain>
	);
};

export default Main;
