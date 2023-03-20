import { FC } from "react";
import { IPropsButton } from "types";
import * as S from "./index.styles";

export const Button:FC<IPropsButton> = ({onClick}):JSX.Element => {
	return <S.ContanerButton onClick={onClick}><span>Поиск</span> </S.ContanerButton>;
};
