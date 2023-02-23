import * as Yup from "yup";
import moment from "moment";

export interface FormValuesType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  phoneNumber: string;
}

export const initialValues: FormValuesType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  phoneNumber: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!"),
  lastName: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string()
    .required("Required!")
    .min(6)
    .max(14)
    .matches(
      /[a-zA-Z][1-9]/,
      "Password can only contain Latin letters and min 1 number."
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must match")
    .required("Required!"),
  dateOfBirth: Yup.date()
    .nullable()
    .test(
      "dateOfBirth",
      "Enter your date of birth. You must be 18 years or older",
      function (value) {
        return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
      }
    )
    .required("Required!"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Enter Your Phone Number"),
});