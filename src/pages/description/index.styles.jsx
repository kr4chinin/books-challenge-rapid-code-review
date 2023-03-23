import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	max-width: 1400px;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	min-height: 700px;
	background-color: #cdcdcd;
	border-radius: 20px;
	img {
		max-width: 700px;
		width: 100%;
		height: 500px;
	}
	.container__label {
		max-width: 400px;
		width: 100%;
	}
	.container__description {
		max-width: 700px;
		width: 100%;
		.name {
			max-width: 300px;
			width: 100%;
			
		}
		.categories {
			max-width: 300px;
			width: 100%;
		}
		.authors {
			max-width: 300px;
			width: 100%;
		}
		.nameSpace{
			font-weight: 900;
		}
		.namingBook{
			font-family: 'Edu NSW ACT Foundation', cursive;
		}
	}
`;
