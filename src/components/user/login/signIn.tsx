import { FC } from "react";

import { Formik, Form, Field } from "formik";

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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// initialvalues and validation for login form
import { initialValues } from "../formValidation/loginValidation";
import { validationSchema } from "../formValidation/loginValidation";

const onSubmit = (values: any) => {
  console.log(values);
};

const options = [
  { key: "Email", value: "emailmoc" },
  { key: "Telephone", value: "telephonemoc" },
];

const SignIn: FC = () => {
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
              {/* <Box>
                <label>Mode Of Contact</label>
                <Field
                  type="radio"
                  name="modeOfContact"
                  id="modeOfContact"
                  label="Mode of contact"
                  options={options}
                >
                  {({ field }: any) => {
                    return options.map((option) => {
                      return (
                        <div key={option.key} className="mt-2">
                          <input
                            type="radio"
                            id={option.key}
                            {...field}
                            value={option.value}
                            checked={field.value === option.value}
                            error={
                              Boolean(formik.errors.modeOfContact) &&
                              Boolean(formik.touched.modeOfContact)
                            }
                            helperText={
                              Boolean(formik.touched.modeOfContact) &&
                              formik.errors.modeOfContact
                            }
                          />
                          <label htmlFor={option.value} className="pl-2">
                            {option.key}
                          </label>
                        </div>
                      );
                    });
                  }}
                </Field>
                <Field
                  type="number"
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
              </Box> */}
              <Field
                //  type="text"
                id="email"
                name="email"
                as={TextField}
                autoComplete="given-email"
                required
                fullWidth
                margin="normal"
                label="Email Address or Phone Number"
                error={
                  Boolean(formik.errors.email) && Boolean(formik.touched.email)
                }
                helperText={
                  Boolean(formik.touched.email) && formik.errors.email
                }
              />

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
