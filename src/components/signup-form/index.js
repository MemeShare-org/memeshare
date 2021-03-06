import React, { useState } from "react";
import signup from "../../actions/auth/signup";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "../button";
import { SignupFormDiv, SignupMessage } from "./style";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const SignUpForm = () => {
  const [IsLoading, setIsLoading] = useState(false);

  return (
    <SignupFormDiv>
      <SignupMessage>
        <h2>Welcome,</h2>
        <p>Sign up with your username, email and password.</p>
      </SignupMessage>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setIsLoading(true);
          setSubmitting(false);
          signup({ setIsLoading, values, resetForm });
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field
              className={
                errors.username && touched.username ? "error" : "succes"
              }
              type="username"
              name="username"
              placeholder="Username"
            />
            <Field
              className={errors.email && touched.email ? "error" : "succes"}
              type="email"
              name="email"
              placeholder="Email"
            />
            <Field
              className={
                errors.password && touched.password ? "error" : "succes"
              }
              type="password"
              name="password"
              placeholder="Password"
            />
            <div>
              <a href="/signin">I already have an account</a>
            </div>
            <Button
              IsLoading={IsLoading}
              LoadingMessage="Signing up..."
              Title="Sign up"
              Type="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </SignupFormDiv>
  );
};
export default SignUpForm;
