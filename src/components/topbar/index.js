import React from "react";
import FooterLogo from "../footer-logo/index";
import Input from "../input";
import TopbarAccount from "../topbar-account";
import { TopbarDiv } from "./style";
  
const Topbar = () => (
  <TopbarDiv>
    <FooterLogo />
    <Input Title='Search' Type='search' />
    <TopbarAccount />
  </TopbarDiv>
);

export default Topbar;