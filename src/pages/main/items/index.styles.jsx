import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	min-height: calc(100vh - 200px);
	gap: 15px;
	a {
		display: flex;
		flex-wrap: wrap;
		max-width: 200px;
		width: 100%;
		text-decoration: none;
		color: #000;
	}
`;

export const InlineBooks = styled.span`
	font-family: 'Edu NSW ACT Foundation', cursive;
`;
export const InlineCounter = styled.span`
	font-weight: 900;
	margin: 0 10px;
`;

export const ContainerContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	gap: 30px;
	text-decoration: none;
	color: #000;
`;
