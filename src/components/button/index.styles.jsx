import styled from "styled-components";

export const ContanerButton = styled.button`
	max-width: 100px;
	min-height: 50px;
	background-color: transparent;
	border-radius: 10px;
	border: none;
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
