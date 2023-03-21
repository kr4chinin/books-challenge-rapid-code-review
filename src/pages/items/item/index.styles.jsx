import styled from "styled-components";



export const Container = styled.div`
   max-width: 280px !important;
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:350px;
    justify-content: space-evenly;
    text-align: center;
    &:hover{
      cursor: pointer;
      background-color:#cdcdcd }
   img{
      width:120px;
      height:160px;
      margin-bottom:40px;
   }
   span{
      font-size: 12px; font-family: 'Monotype Corsiva';
      overflow: hidden;
  white-space: pre-wrap;
   }
`