import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	gap: 15px;
	min-height: calc(100vh - 200px);
	a {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		max-width: 200px;
		text-decoration: none;
		color: #000;
	}
`;

export const Text = styled.span`
	font-family: 'Edu NSW ACT Foundation', cursive;
`;
export const Counter = styled.span`
	margin: 0 10px;
	font-weight: 900;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
	text-decoration: none;
	color: #000;
`;
