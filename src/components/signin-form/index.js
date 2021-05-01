import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "../button";
import { SigninFormDiv, SigninMessage } from "./style";

const SigninSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const SignInForm = () => {
  const { setUser } = useContext(UserContext);

  return (
    <SigninFormDiv>
      <SigninMessage>
        <h2>Welcome,</h2>
        <p>Sign in with your username and password.</p>
      </SigninMessage>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
		  setUser(values);
        }}>
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field
              className={
                errors.username && touched.username ? "error" : "succes"
              }
              type='username'
              name='username'
              placeholder='Username'
            />
            <Field
              className={
                errors.password && touched.password ? "error" : "succes"
              }
              type='password'
              name='password'
              placeholder='Password'
            />
            <div>
              <a href='/sign-up'>I don't have an account</a>
            </div>
            <Button Title='Sign in' Type='submit' />
          </Form>
        )}
      </Formik>
    </SigninFormDiv>
  );
};

export default SignInForm;
