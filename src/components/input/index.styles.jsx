import styled from "styled-components";

export const ContainerInput = styled.div`
      display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    input{
      outline: none;
      max-width:500px;
      width: 100%;
      min-height:50px;
      border-radius: 10px;
      border: none;
      font-size: 20px;
      ::placeholder{
         font-size: 20px;
      }
    }
`