import React, { useState, useEffect } from "react";
import Logo from "../logo/index";
import Input from "../input";
import TopbarAccount from "./topbar-account";
import { TopbarDiv, ScrollTopbar } from "./style";

const Topbar = ({ user, setUser }) => {
  const [isScrolling, SetIsScrolling] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        SetIsScrolling(true);
      } else {
        SetIsScrolling(false);
      }
    });
  });

  return (
    <div>
      {isScrolling ? (
        <ScrollTopbar>
          <Logo />
          <Input Title='Search' Type='search' />
          <TopbarAccount user={user} setUser={setUser}  />
        </ScrollTopbar>
      ) : (
        <TopbarDiv>
          <Logo />
          <Input Title='Search' Type='search' />
          <TopbarAccount user={user} setUser={setUser} />
        </TopbarDiv>
      )}
    </div>
  );
};

export default Topbar;
