import { Button } from "components/button";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./index.styles";
import { getBooks } from "redux/reducer";
import React from 'react'

const Input:FC = ():JSX.Element => {
   const dispatch = useDispatch();
const [value, setValue] = useState()



const handleValue = (e:any) => {
   setValue(e.target.value)
}

   const triggerLoadData = () => {
      dispatch(getBooks(value))
      console.log('adada')
   }
   const handleChange = (e:React.KeyboardEvent):void => {
      if (e.key === 'Enter') {
         dispatch(getBooks(value))
      }
    }
    

   return (
    
      <S.ContainerInput>
         <input type="text" placeholder="Введите название книги" onChange={handleValue} onKeyPress={handleChange}/>
         <Button onClick={triggerLoadData}  />

        
      </S.ContainerInput>
  
   )
}

export default Input;