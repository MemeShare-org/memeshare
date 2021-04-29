import React from "react";
import LogoImg from "../../assests/logo.png";
import { LogoDiv } from './style';

const Logo = () => (
	<LogoDiv className='logo'>
		<img src={LogoImg} alt='HI!' title='HI!' />
		<h1 className='header'>MemeShare</h1>
	</LogoDiv>
);

export default Logo;