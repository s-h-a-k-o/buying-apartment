import { FC, useState } from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

import moment from "moment";

import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

interface FormValuesType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
}

const initialValues: FormValuesType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!"),
  lastName: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string()
    .required("Required!")
    .min(6)
    .max(14)
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must match")
    .required("Required!"),
  dateOfBirth: Yup.date()
    .nullable()
    // .test("dateOfBirth", "You must be 18 years or older", function (value) {
    //   return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
    // })
    .required("Please enter your age"),
});

const onSubmit = (values: FormValuesType, formikHelpaers: any) => {
  console.log(values);
  formikHelpaers.resetForm();
};

const SignUp: FC = () => {
  const [value, setValue] = useState<Dayjs | null >(null); //????

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
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    as={TextField}
                    autoComplete="email"
                    required
                    fullWidth
                    label="Email Address"
                    error={
                      Boolean(formik.errors.email) &&
                      Boolean(formik.touched.email)
                    }
                    helperText={
                      Boolean(formik.touched.email) && formik.errors.email
                    }
                  />
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
                  {" "}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Birthday"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <Field
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          as={TextField}
                          required
                          fullWidth
                          error={
                            Boolean(formik.errors.confirmPassword) &&
                            Boolean(formik.touched.confirmPassword)
                          }
                          helperText={
                            Boolean(formik.touched.confirmPassword) &&
                            formik.errors.confirmPassword
                          }
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
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
