import React from "react";
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { LinksDiv } from './style';

const FooterLinks = () => (
	<LinksDiv>
		<YouTubeIcon className='youtube' />
		<TwitterIcon />
		<GitHubIcon />
	</LinksDiv>
);

export default FooterLinks;