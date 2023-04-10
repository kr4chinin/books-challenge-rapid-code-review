import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: 1400px;
	width: 100%;
	min-height: 700px;
	border-radius: 20px;
	background: linear-gradient(#b98d60, #474649);
	@media (max-width: 560px) {
		max-width: 500px;
		width: 100%;
		min-height: 400px;
	}
`;

export const ContainerLabel = styled.div`
	margin: 0 40px 0 40px;
`;

export const Image = styled.img`
	max-width: 700px;
	width: 100%;
	height: 500px;
	@media (max-width: 560px) {
		max-width: 100px;
		width: 100%;
		height: 180px;
	}
`;

export const ContainerDescription = styled.div`
	max-width: 700px;
	width: 100%;
	@media (max-width: 560px) {
		max-width: 300px;
		width: 100%;
	}
`;

export const Page = styled.p`
	max-width: 300px;
	width: 100%;
	@media (max-width: 560px) {
		max-width: 100px;
		width: 100%;
		font-size: 10px;
	}
`;

export const InlineString = styled.span`
	font-weight: 900;
	font-family: 'Edu NSW ACT Foundation', cursive;
`;
