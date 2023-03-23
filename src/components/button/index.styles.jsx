import styled from "styled-components";

export const ContainerButton = styled.button`
	max-width: 100px;
	margin-left: 10px;
	min-height: 50px;
	background-color: transparent;
	border-radius: 10px;
	border: 1px solid #000;
	padding: 5px 10px;
	@media(max-width:560px){
		padding: 1px 1px;
		min-height: 30px;
	}
	span {
		font-family: "Edu NSW ACT Foundation", cursive;
		font-weight: 700;
	}
	:hover {
		cursor: pointer;
		background-color: #9f9999;
		border: 1px solid #000;
		transition: all 500ms;
	}
`;
