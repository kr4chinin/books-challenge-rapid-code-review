import styled from "styled-components";

export const ContainerMain = styled.div`
	flex-direction: column;
	background: linear-gradient(#b7d1b1, #4d3a5c);
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
	}
`;
