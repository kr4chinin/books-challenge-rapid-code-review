import styled from 'styled-components';

export const Container = styled.div`
	max-width: 280px !important;
	width: 100% !important;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 350px;
	justify-content: space-evenly;
	text-align: center;
	border-radius: 15px;
	border: 1px solid transparent;
	&:hover {
		cursor: pointer;
		background-color: #ac9c8c;
		transition: all 700ms;
	}
	img {
		width: 120px;
		height: 160px;
		margin-bottom: 40px;
	}
	span {
		font-size: 12px;
		font-family: 'Monotype Corsiva';
		overflow: hidden;
		white-space: pre-wrap;
	}
	.upperName {
		font-weight: 700;
	}
	.nameOfcompany {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -moz-box;
		-moz-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		line-clamp: 3;
		box-orient: vertical;
	}
`;
