import styled from 'styled-components';

export const ContainerButton = styled.button`
	max-width: 100px;
	min-height: 50px;
	margin-left: 10px;
	padding: 5px 10px;
	background-image: linear-gradient(60deg, #cdcdcd 50%, transparent 30%);
	background-position: 100%;
	background-size: 400%;
	background-color: transparent;
	border-radius: 10px;
	border: 1px solid #434242;
	@media (max-width: 560px) {
		min-height: 30px;
		padding: 1px 1px;
	}
	:hover {
		cursor: pointer;
		transition: all 500ms;
		border: 1px solid transparent;
		background-position: 10%;
	}
`;

export const Inline = styled.span`
	font-family: 'Edu NSW ACT Foundation', cursive;
	font-weight: 700;
`;
