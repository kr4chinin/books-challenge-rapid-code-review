import { FC } from "react";
import { IPropsButton } from "types";
import * as S from "./index.styles";

export const Button:FC<IPropsButton> = ({ onClick, buttonName }):JSX.Element => {
	return <S.ContainerButton onClick={onClick} ><span>{buttonName}</span></S.ContainerButton>;
};
