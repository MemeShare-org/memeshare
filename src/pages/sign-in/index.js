import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import SignInForm from "../../components/signin-form/index";
import FooterLogo from "../../components/footer-logo/index";
import FooterLinks from "../../components/footer-links/index";
import { SigninDiv, SigninFooter } from "./style";

const Signin = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return (
		<SigninDiv>
			{loading ? (
				<BeatLoader color='yellow' loading={loading} size={20} />
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
