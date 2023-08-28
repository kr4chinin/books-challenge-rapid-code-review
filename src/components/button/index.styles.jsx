import styled from 'styled-components';

export const Button = styled.button`
  max-width: 100px;
  min-height: 50px;
  margin-left: 10px;
  padding: 5px 10px;
  border: 1px solid #434242;
  border-radius: 10px;
  background-image: linear-gradient(60deg, #cdcdcd 50%, transparent 30%);
  background-position: 100%;
  background-size: 400%;
  background-color: transparent;

  @media (max-width: 560px) {
    min-height: 30px;
    padding: 1px 1px;
  }

  :hover {
    cursor: pointer;
    border: 1px solid transparent;
    background-position: 10%;
    transition: all 500ms;
  }
`;

export const ButtonName = styled.span`
  font-family: 'Edu NSW ACT Foundation', cursive;
  font-weight: 700;
`;
