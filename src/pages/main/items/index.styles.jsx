import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	min-height: calc(100vh - 200px);
	.counterBooks {
		font-family: 'Edu NSW ACT Foundation', cursive;
	}
	.counter {
		font-weight: 900;
		margin: 0 10px;
	}
	.container__content {
		text-decoration: none;
		color: #000;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 30px;

		a {
			text-decoration: none;
			color: #000;
			max-width: 200px;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
		}
	}
`;
