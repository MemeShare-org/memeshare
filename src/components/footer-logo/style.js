import styled from "styled-components";

export const FooterLogoDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	left: 10px;

	img {
		cursor: pointer;
		width: 80px;
		height: 80px;
	}

	h1 {
		cursor: pointer;
		color: gold;
		margin-left: 10px;
	}

	@media screen and (max-width: 768px) {
		top: 10px;
	}
`;
