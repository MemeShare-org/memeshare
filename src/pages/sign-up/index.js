import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";
import SignUpForm from "../../components/signup-form/index";
import FooterLogo from "../../components/footer-logo/index";
import FooterLinks from "../../components/footer-links/index";
import { SignupDiv, SignupFooter } from "./style";

const Signin = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title= 'MemeShare | Sign up';
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <SignupDiv>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <SignUpForm />
          <SignupFooter>
            <FooterLogo />
            <FooterLinks />
          </SignupFooter>
        </>
      )}
    </SignupDiv>
  );
};

export default Signin;
