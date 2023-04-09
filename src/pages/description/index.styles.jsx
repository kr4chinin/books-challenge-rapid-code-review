import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	max-width: 1400px;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	min-height: 700px;
	background: linear-gradient(#b98d60, #474649);
	border-radius: 20px;
	.container__label {
		margin: 0 40px 0 40px;
	}
	@media (max-width: 560px) {
		max-width: 500px;
		width: 100%;
		min-height: 400px;
	}
	img {
		max-width: 700px;
		width: 100%;
		height: 500px;
		@media (max-width: 560px) {
			max-width: 100px;
			width: 100%;
			height: 180px;
		}
	}
	.container__label {
		max-width: 400px;
		width: 100%;
		@media (max-width: 560px) {
			display: flex;
			justify-content: center;
		}
	}
	.container__description {
		max-width: 700px;
		width: 100%;
		@media (max-width: 560px) {
			max-width: 300px;
			width: 100%;
		}
		.name {
			max-width: 300px;
			width: 100%;
			@media (max-width: 560px) {
				max-width: 100px;
				width: 100%;
				font-size: 10px;
			}
		}
		.categories {
			max-width: 300px;
			width: 100%;
			@media (max-width: 560px) {
				max-width: 100px;
				width: 100%;
				font-size: 10px;
			}
		}
		.authors {
			max-width: 300px;
			width: 100%;
			@media (max-width: 560px) {
				max-width: 100px;
				width: 100%;
				font-size: 10px;
			}
		}
		.nameSpace {
			font-weight: 900;
		}
		.namingBook {
			font-family: 'Edu NSW ACT Foundation', cursive;
		}
		.description {
			@media (max-width: 560px) {
				max-width: 350px;
				width: 100%;
				font-size: 9px;
			}
		}
	}
`;
