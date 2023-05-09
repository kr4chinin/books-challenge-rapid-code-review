import styled from 'styled-components';

export const ContainerMain = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1200px;
	min-height: calc(100vh - 100px);
	border-radius: 10px;
	background: linear-gradient(#b98d60, #474649);
	box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.5);
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 50px 0 20px 0;
	@media (max-width: 560px) {
		min-height: 30px;
		margin: 20px 10px 0 10px;
	}
`;

export const HeaderMain = styled.div`
	display: flex;
	width: 100%;
	max-width: 600px;
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 605px;
	margin-top: 40px;
	@media (max-width: 560px) {
		display: grid;
		align-content: center;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 30% 30% 30%;
		gap: 20px;
		margin-bottom: 20px;
	}
`;
