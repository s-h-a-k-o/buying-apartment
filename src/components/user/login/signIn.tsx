import { FC, useState, useEffect } from "react";

import { Formik, Form, Field, FormikHelpers } from "formik";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";

// initialvalues and validation for login form
import { initialValues } from "../formValidation/loginValidation";
import { validationSchema } from "../formValidation/loginValidation";
import { SignInType } from "@/models/user";

import { API } from "@/api/Api";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth-slice";

const SignIn: FC = () => {
  const [emailError, setEmailError] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    API.setToken("");
  }, []);

  const onSubmit = async (
    values: SignInType,
    formikHelpers: FormikHelpers<SignInType>
  ) => {
    formikHelpers.setSubmitting(true);
    const sendObj = { email: values.email, password: values.password };

    try {
      const response: { token: string; _id: string } = await API.user.login(
        sendObj
      );
      formikHelpers.resetForm();
      API.setToken(response.token);
      setEmailError(false);
      router.push(`/user/profile/${response._id}`);
      dispatch(authActions.login());
    } catch (err: any) {
      console.log(err.response);
      if (
        err.response?.status === 403 &&
        err.response?.data.message === "invalid_user_or_password"
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
          Sign in
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="mt-5">
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
                        ? "invalid_user_or_password"
                        : Boolean(formik.touched.email) && formik.errors.email
                    }
                  />
                )}
              </Field>
              <Field
                type="password"
                id="password"
                name="password"
                as={TextField}
                autoComplete="given-password"
                required
                fullWidth
                margin="normal"
                label="Password"
                error={
                  Boolean(formik.errors.password) &&
                  Boolean(formik.touched.password)
                }
                helperText={
                  Boolean(formik.touched.password) && formik.errors.password
                }
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="bg-blue-700 hover:bg-blue-600"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/user/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
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

export default SignIn;
