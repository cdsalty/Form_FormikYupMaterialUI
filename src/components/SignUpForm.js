import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signupform.css";

// SIGNUP FORM FUNCTION
const SignUpForm = ({ handleChange }) => {
  // Styling
  const paperStyle = {
    padding: "30px 20px",
    width: 300,
    margin: "20px auto" // to center it accordingly
  };
  const headerStyle = {
    padding: "7px",
    margin: 0
  };
  const avatarStyle = {
    backgroundColor: "blue"
  };
  const buttonStyle = {
    marginTop: "15px"
  };

  // Formik Function(s)
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  };

  // Need to research more...
  // const MuiFormHelperText-root = {
  //   color: "red !important"
  // };

  // Event Listeners
  const onSubmit = (values, props) => {
    // setSubmitting(true); // For future spinner?
    // console.log(values);
    // console.log(props);
    props.resetForm();
  };

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    // .required("Required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Required"),
    password2: Yup.string()
      .when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Passwords must match")
      })
      .min(
        8,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Required")
  });

  return (
    <Grid>
      <Paper elevation={16} style={paperStyle}>
        <Grid align="left">
          <Avatar style={avatarStyle}></Avatar>
        </Grid>
        <Grid align="center">
          <h2 style={headerStyle}>Sign-Up Form</h2>
          <Typography variant="caption" gutterBottom>
            Complete form to create an account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {props => (
            <Form>
              {/* {console.log(`The Form Props: ${props}`)} */}
              {/* {console.log(props)} */}

              <Field
                as={TextField}
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
                fullWidth
                required
                helperText={<ErrorMessage name="firstName" />}
              />
              <Field
                as={TextField}
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
                fullWidth
                helperText={<ErrorMessage name="lastName" />}
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                placeholder="Enter a valid email adress"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                type="password"
                label="Password"
                name="password"
                // placeholder="8 characters min; include 1 number, 1 letter, 1 special character"
                placeholder="password"
                autoComplete="on"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                autoComplete="on"
                fullWidth
                type="password"
                name="password2"
                label="Confirm Password"
                placeholder="Confirm password"
                required
                helperText={<ErrorMessage name="password2" />}
              />
              <Button
                style={buttonStyle}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign in"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUpForm;

// I may need to create a <Grid> around Avatar
// difference between grid and div and it's effects

/*
need to show error message on signin form
helpertext is used to show errors

*/
