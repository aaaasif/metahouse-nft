import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import "./Auth.scss";
import logo from "../../assets/abstracts/logo.png";
import { ReactComponent as SignUpAbstract } from "../../assets/abstracts/signup.svg";
import { Button } from "../../components";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  walletAddress: "",
};

const SignUp: React.FC = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .max(50, "username can't exceed more than 50 characters")
      .required("username is required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    password: Yup.string()
      .min(8, "password must be atleast 8 characters required")
      .required("password is required"),
    confirmPassword: Yup.string().required("confirm password is required"),
    walletAddress: Yup.string().required("wallet address is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div className="auth_page">
      <div className="auth_page_abstracts">
        <div className="auth_page_abstracts-logo">
          <img src={logo} alt="logo" width={250} />
        </div>
        <div className="auth_page_abstracts-content">
          <h2>WE deliver more than you expected.</h2>
          <h4>Start your journey with us.</h4>
        </div>
        <div className="auth_page_abstracts-illustration">
          <SignUpAbstract />
        </div>
      </div>
      <div className="auth_page_form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="form">
                <div>
                  <h2>Signup</h2>
                </div>
                <div className="form_input">
                  <Field name="username" placeholder="Username" />
                  <ErrorMessage name="username" className="error_input" component="div" />
                </div>
                <div className="form_input">
                  <Field name="email" placeholder="Email" />
                  <ErrorMessage name="email" className="error_input" component="div" />
                </div>
                <div className="form_input">
                  <Field name="password" placeholder="Password" />
                  <ErrorMessage name="password" className="error_input" component="div" />
                </div>
                <div className="form_input">
                  <Field name="confirmPassword" placeholder="Confirm password" />
                  <ErrorMessage name="confirmPassword" className="error_input" component="div" />
                </div>
                <div className="form_input">
                  <Field name="walletAddress" placeholder="Wallet address" />
                  <ErrorMessage name="walletAddress" className="error_input" component="div" />
                </div>
                <Button>Signup</Button>
              </div>
              <div className="form_footer">
                <p>already have an account?</p>
                <Link to="/login">Login</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
