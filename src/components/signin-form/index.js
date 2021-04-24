import React from "react";
import Input from '../input';
import Button from '../button';
import { SignupFormDiv, SignupMessage } from './style';

const SignInForm = () => (
	<SignupFormDiv>
		<SignupMessage>
			<h2>Welcome,</h2>
			<p>Sign up with your username, email and password.</p>
		</SignupMessage>
		<Input Title='Username' Type='text' />
		<Input Title='Email' Type='email' />
		<Input Title='Password' Type='password' />
		<Button Title='Sign up' Type='submit' />
	</SignupFormDiv>
);

export default SignInForm;
