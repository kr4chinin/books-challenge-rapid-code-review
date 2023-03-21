import styled from "styled-components";

export const ContainerButton = styled.button`
	max-width: 100px;
	margin-left: 10px;
	min-height: 50px;
	background-color: transparent;
	border-radius: 10px;
	border: 1px solid #000;
	padding: 5px 10px;
	span {
		font-family: "Edu NSW ACT Foundation", cursive;
		font-weight: 700;
	}
	:hover {
		cursor: pointer;
		background-color: #fdd;
		border: 1px solid #000;
		transition: all 500ms;
	}
`;