import styled from "styled-components";

export const LinksDiv = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	right: 10px;

	svg {
		font-size: 40px;
		color: darkgrey;
		margin: 0px 10px 0px 10px;
	}

	.youtube {
		font-size: 50px;
	}

	@media screen and (max-width: 768px) {
		bottom: 10px;
		right: 25%;
	}
`;

