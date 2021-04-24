import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import SignInForm from "../../components/signin-form/index";
import FooterLogo from "../../components/footer-logo/index";
import FooterLinks from "../../components/footer-links/index";
import { SignupDiv, SignupFooter } from "./style";

const Signin = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return (
		<SignupDiv>
			{loading ? (
				<BeatLoader color='yellow' loading={loading} size={20} />
			) : (
				<>
					<SignInForm />
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
