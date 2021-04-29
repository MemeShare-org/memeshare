import styled from "styled-components";

export const SigninDiv = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;


export const SigninFooter = styled.div`
	position: fixed;
	bottom 50px;
	display: flex;
	justify-cotent: space-between;
	align-items: center;
	width: 100vh;

	@media screen and (max-width: 768px) {
		bottom: 0px;
	}
`;

