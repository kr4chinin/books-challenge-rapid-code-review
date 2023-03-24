import { kindSortButtons } from "assets/constants";
import { Button } from "components/button";
import Input from "components/input";
import Select from "components/select";

import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "redux/reducer";
import { state } from "redux/selectors";
import { localString } from "types";
import * as S from "./index.styles";
import Items from "./items";

const Main: FC = (): JSX.Element => {
	const generalState = useSelector(state);
	const dispatch = useDispatch();
	const [value, setValue] = useState<localString>("");
	const [sortingField, setSortingField] = useState<localString>("");

	const triggerLoadData = (): void => {
		dispatch(getBooks(value));
	};

	const triggerSortByKind = (name: localString): void => {
		setSortingField(name);
	};

	return (
		<S.ContainerMain>
			<div className="header">
				<div className="header__mainfield">
					<Input value={value} setValue={setValue} />
					<Button onClick={triggerLoadData} buttonName={"Search"} />
				</div>
				<div className="buttonsGroupSorting">
					{kindSortButtons.map(({className, name, id}) => (
						<Button
							key={id}
							className={className}
							onClick={() => triggerSortByKind(name)}
							buttonName={name}
						/>
					))}
				</div>
				<Select value={value} />
			</div>
			<Items state={generalState} sortingField={sortingField}/>
		</S.ContainerMain>
	);
};

export default Main;
