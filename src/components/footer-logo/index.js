import React from "react";
import Logo from "../../assests/logo.png";
import { FooterLogoDiv } from './style';

const FooterLogo = () => (
	<FooterLogoDiv>
		<img src={Logo} alt='HI!' title='HI!' />
		<h1>MemeShare</h1>
	</FooterLogoDiv>
);

export default FooterLogo;