import styled from "styled-components";

export const ContainerButton = styled.button`
	max-width: 100px;
	margin-left: 10px;
	min-height: 50px;
	background-color: transparent;
	border-radius: 10px;
	border: none;
	padding: 5px 10px;
	@media (max-width: 560px) {
		padding: 1px 1px;
		min-height: 30px;
	}
	span {
		font-family: "Edu NSW ACT Foundation", cursive;
		font-weight: 700;
	}
	:hover {
		cursor: pointer;
		background-color: #cfc3c3;
		transition: all 500ms;
	}
`;
