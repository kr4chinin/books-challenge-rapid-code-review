import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  min-height: 700px;
  border-radius: 20px;
  background: linear-gradient(#b98d60, #474649);

  @media (max-width: 560px) {
    width: 100%;
    max-width: 500px;
    min-height: 400px;
  }
`;

export const Label = styled.div`
  margin: 0 40px 0 40px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 700px;
  height: 500px;
  @media (max-width: 560px) {
    width: 100%;
    max-width: 100px;
    height: 180px;
  }
`;

export const Description = styled.div`
  width: 100%;
  max-width: 700px;
  @media (max-width: 560px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const Page = styled.p`
  width: 100%;
  max-width: 300px;
  @media (max-width: 560px) {
    width: 100%;
    max-width: 100px;
    font-size: 10px;
  }
`;

export const Text = styled.span`
  font-family: 'Edu NSW ACT Foundation', cursive;
  font-weight: 900;
`;
