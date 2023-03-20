import { Button } from "components/button";
import { FC } from "react";
import { useDispatch } from "react-redux";
import * as S from "./index.styles";
import { getBooks } from "redux/reducer";

const Input:FC = ():JSX.Element => {
   const dispatch = useDispatch();

   const triggerLoadData = () => {
      dispatch(getBooks())

   }


   return (
      <S.ContainerInput>
         <input type="text" placeholder="Введите название книги" />
         <Button onClick={triggerLoadData}/>
      </S.ContainerInput>
   )
}

export default Input;