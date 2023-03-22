import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	min-height: calc(100vh - 200px);
	.container__content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 30px;
	}
`;
