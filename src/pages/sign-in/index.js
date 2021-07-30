import React, { useState, useEffect } from "react";
import Loader from "../../components/loader";
import SignInForm from "../../components/signin-form/index";
import FooterLogo from "../../components/footer-logo/index";
import FooterLinks from "../../components/footer-links/index";
import { SigninDiv, SigninFooter } from "./style";

const Signin = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Memeshare | Sign in";
    setLoading(false);
  }, []);

  return (
    <SigninDiv>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <SignInForm />
          <SigninFooter>
            <FooterLogo />
            <FooterLinks />
          </SigninFooter>
        </>
      )}
    </SigninDiv>
  );
};

export default Signin;
