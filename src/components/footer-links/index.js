import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { LinksDiv } from "./style";

const FooterLinks = () => (
  <LinksDiv>
    <YouTubeIcon className='youtube' />
    <a href='https://github.com/MemeShare-org' target='_blank' rel='noreferrer'>
      <GitHubIcon />
    </a>
    <a href='https://www.instagram.com/memeshare.01/' target='_blank' rel='noreferrer'>
      <InstagramIcon />
    </a>
    <a href='https://twitter.com/MemeShare4' target='_blank' rel='noreferrer'>
      <TwitterIcon />
    </a>
  </LinksDiv>
);

export default FooterLinks;
