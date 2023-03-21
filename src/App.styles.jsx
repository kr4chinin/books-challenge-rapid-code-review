import styled from "styled-components";

export const Container = styled.div`
	background: linear-gradient(#7f9b7a, #542877);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	div {
		background: linear-gradient(#b7d1b1, #4d3a5c);
		max-width: 1200px;
		width: 100%;
		min-height: 100px;
		border-radius: 10px;
		box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.5);
	}
`;
