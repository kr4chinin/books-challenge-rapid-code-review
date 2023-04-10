import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	min-height: calc(100vh - 200px);

	a {
		text-decoration: none;
		color: #000;
		max-width: 200px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
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
	text-decoration: none;
	color: #000;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;
`;
