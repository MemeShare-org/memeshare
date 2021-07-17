import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../logo/index";
import Input from "../input";
import TopbarAccount from "./topbar-account";
import { TopbarDiv } from "./style";

const Topbar = ({ user, setUser }) => {
  const history = useHistory();



  return (
    <div>

        <TopbarDiv>
          <Logo history={history} />
          <Input Title='Search' Type='search' />
          <TopbarAccount user={user} setUser={setUser} />
        </TopbarDiv>

    </div>
  );
};

export default Topbar;
