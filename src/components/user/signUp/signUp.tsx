import { FC, useState } from "react";

import { Formik, Form, Field, FormikHelpers } from "formik";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

//validation and initialvalues for signup form
import { SignUpType } from "@/models/user";
import { initialValues } from "../formValidation/signupValidation";
import { validationSchema } from "../formValidation/signupValidation";
import { API } from "@/api/Api";

const SignUp: FC = () => {
  const [emailError, setEmailError] = useState(false);
  const [createAcc, setCreateAcc] = useState(false);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  const onSubmit = async (
    values: SignUpType,
    formikHelpers: FormikHelpers<SignUpType>
  ) => {
    formikHelpers.setSubmitting(true);
    const sendObj = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      dateOfBirth: values.dateOfBirth,
      phoneNumber: values.phoneNumber,
    };

    try {
      await API.user.signup(sendObj);
      formikHelpers.resetForm();
      console.log(values);
      setCreateAcc(true);
      setTimeout(() => {
        setCreateAcc(false);
      }, 1500);
    } catch (err: any) {
      console.log(err.response);
      if (
        err.response?.status === 409 &&
        err.response?.data.message === "email_already_exists"
      ) {
        setEmailError(true);
      }
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="mt-5">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    as={TextField}
                    autoComplete="given-name"
                    required
                    fullWidth
                    label="First Name"
                    error={
                      Boolean(formik.errors.firstName) &&
                      Boolean(formik.touched.firstName)
                    }
                    helperText={
                      Boolean(formik.touched.firstName) &&
                      formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    as={TextField}
                    autoComplete="family-name"
                    required
                    fullWidth
                    label="Last Name"
                    error={
                      Boolean(formik.errors.lastName) &&
                      Boolean(formik.touched.lastName)
                    }
                    helperText={
                      Boolean(formik.touched.lastName) && formik.errors.lastName
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field name="email">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        type="email"
                        id="email"
                        autoComplete="email"
                        label="Email Address"
                        required
                        fullWidth
                        onKeyUp={() => setEmailError(false)}
                        error={
                          (Boolean(formik.errors.email) &&
                            Boolean(formik.touched.email)) ||
                          emailError
                        }
                        helperText={
                          emailError
                            ? "Email already exists"
                            : Boolean(formik.touched.email) &&
                              formik.errors.email
                        }
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    as={TextField}
                    required
                    fullWidth
                    label="Password"
                    error={
                      Boolean(formik.errors.password) &&
                      Boolean(formik.touched.password)
                    }
                    helperText={
                      Boolean(formik.touched.password) && formik.errors.password
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    as={TextField}
                    required
                    fullWidth
                    label="Confirm Password"
                    error={
                      Boolean(formik.errors.confirmPassword) &&
                      Boolean(formik.touched.confirmPassword)
                    }
                    helperText={
                      Boolean(formik.touched.confirmPassword) &&
                      formik.errors.confirmPassword
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Your Age (18+)"
                      value={formik.values.dateOfBirth || null}
                      maxDate={maxDate}
                      onChange={(newValue) => {
                        formik.setFieldValue("dateOfBirth", newValue);
                      }}
                      renderInput={(params) => (
                        <Field
                          {...params}
                          as={TextField}
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          required
                          fullWidth
                          error={
                            Boolean(formik.errors.dateOfBirth) &&
                            Boolean(formik.touched.dateOfBirth)
                          }
                          helperText={
                            Boolean(formik.touched.dateOfBirth) &&
                            formik.errors.dateOfBirth
                          }
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    as={TextField}
                    label="Phone Number"
                    required
                    fullWidth
                    error={
                      Boolean(formik.errors.phoneNumber) &&
                      Boolean(formik.touched.phoneNumber)
                    }
                    helperText={
                      Boolean(formik.touched.phoneNumber) &&
                      formik.errors.phoneNumber
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {createAcc && (
                    <Alert severity="success">Registration is successful</Alert>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="bg-blue-700 hover:bg-blue-600"
              >
                Sign Up
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/user/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default SignUp;
