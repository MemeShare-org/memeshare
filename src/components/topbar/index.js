import React from "react";
import Logo from "../logo/index";
import Input from "../input";
import TopbarAccount from "../topbar-account";
import { TopbarDiv } from "./style";

const Topbar = () => (
  <TopbarDiv>
    <Logo />
    <Input Title='Search' Type='search' />
    <TopbarAccount />
  </TopbarDiv>
);

export default Topbar;
