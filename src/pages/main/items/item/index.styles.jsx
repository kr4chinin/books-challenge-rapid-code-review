import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	max-width: 280px !important;
	width: 100% !important;
	height: 350px;
	text-align: center;
	border-radius: 15px;
	border: 1px solid transparent;
	&:hover {
		cursor: pointer;
		background-color: #ac9c8c;
		transition: all 700ms;
	}
`;

export const Image = styled.img`
	width: 120px;
	height: 160px;
	margin-bottom: 40px;
`;

export const InlineString = styled.span`
	display: -webkit-box;
	display: -moz-box;
	overflow: hidden;
	font-size: 12px;
	font-family: 'Monotype Corsiva';
	overflow: hidden;
	white-space: pre-wrap;
	text-overflow: ellipsis;
	-moz-box-orient: vertical;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	line-clamp: 3;
	box-orient: vertical;
`;

export const InlineStringUpper = styled.span`
	font-weight: 700;
`;
