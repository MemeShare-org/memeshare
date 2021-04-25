import React from "react";
import Input from "../input";
import Button from "../button";
import { SigninFormDiv, SigninMessage } from "./style";

const SignInForm = () => (
	<SigninFormDiv>
		<SigninMessage>
			<h2>Welcome,</h2>
			<p>Sign in with your username and password.</p>
		</SigninMessage>
		<Input Title='Username' Type='text' />
		<Input Title='Password' Type='password' />
		<div>
			<a href='/sign-up'>I don't have an account</a>
		</div>
		<Button Title='Sign in' Type='submit' />
	</SigninFormDiv>
);

export default SignInForm;
