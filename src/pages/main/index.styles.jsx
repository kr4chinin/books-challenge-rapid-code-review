import styled from "styled-components";

export const ContainerMain = styled.div`
	flex-direction: column;
	background: linear-gradient(#b98d60, #474649);
	max-width: 1200px;
	width: 100%;
	min-height: calc(100vh - 100px);
	border-radius: 10px;
	box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.5);
	display: flex;
	.header {
		margin: 50px 0 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		@media (max-width: 560px) {
			min-height: 30px;
			margin: 20px 10px 0 10px;
		}
	}
	.header__mainfield {
		display: flex;
		max-width: 600px;
		width: 100%;
	}
	.buttonsGroupSorting {
		margin-top: 40px;
		max-width: 605px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		@media (max-width: 560px) {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 30% 30% 30%;
			gap: 20px;
			margin-bottom: 20px;
			align-content: center;
		}
	}
`;
