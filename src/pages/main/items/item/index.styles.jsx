import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100% !important;
  max-width: 280px !important;
  height: 350px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #ac9c8c;
    transition: all 700ms;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 160px;
  margin-bottom: 40px;
`;

export const Text = styled.span`
  display: -webkit-box;
  display: -moz-box;
  font-size: 12px;
  font-family: 'Monotype Corsiva';
  text-overflow: ellipsis;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
  white-space: pre-wrap;
  overflow: hidden;
`;

export const TextUpperCase = styled.span`
  font-weight: 700;
`;
