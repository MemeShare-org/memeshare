import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { LinksDiv } from "./style";

const FooterLinks = () => (
  <LinksDiv>
    <YouTubeIcon className='youtube' />
    <a href='https://github.com/MemeShare-org' target='_blank' rel='noreferrer'>
      <GitHubIcon />
    </a>
    <InstagramIcon />
    <TwitterIcon />
  </LinksDiv>
);

export default FooterLinks;
