import styled from "styled-components";

export const ContainerButton = styled.button`
	max-width: 100px;
	margin-left: 10px;
	min-height: 50px;
	background-image: linear-gradient(60deg, #cdcdcd 50%, transparent 30%);
	background-position: 100%;
	background-size: 400%;
	background-color: transparent;
	border-radius: 10px;
	border: 1px solid #434242;
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
		transition: all 500ms;
		border: 1px solid transparent;
		background-position: 10%;
	}
`;
