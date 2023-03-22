import { kindSortButtons } from "assets/constants";
import { Button } from "components/button";
import Input from "components/input";
import Select from "components/select";
import Items from "pages/items";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "redux/reducer";
import * as S from "./index.styles";

const Main: FC = (): JSX.Element => {
	const state = useSelector((state: any) => state.books.books.data?.items);
	const dispatch = useDispatch();
	const [value, setValue] = useState();
	const [sortingField, setSortingField] = useState('')

	const triggerLoadData = () => {
		dispatch(getBooks(value));
	};

const triggerSortByKind = (name:any) => {
setSortingField(name)
}

	return (
		<S.ContainerMain>
			<div className="header">
				<div className="header__mainfield">
					<Input value={value} setValue={setValue} />
					<Button onClick={triggerLoadData} buttonName={"Search"} />
				</div>
				<div className="buttonsGroupSorting">
				{kindSortButtons.map((item, index)=><Button key={index} onClick={()=>triggerSortByKind(item.name)} buttonName={item.name} />)}
				</div>
				<Select value={value}/>
			</div>
			<Items state={state} sortingField={sortingField}/>
		</S.ContainerMain>
	);
};

export default Main;
