import * as Yup from "yup";
import moment from "moment";
import { SignUpType } from "@/models/user";

const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

export const initialValues: SignUpType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: maxDate.toISOString(),
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
      "Password can only contain Latin letters and min one number."
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must match")
    .required("Required!"),
  dateOfBirth: Yup.date()
    .nullable()
    .test(
      "dateOfBirth",
      "Required! You must be 18 years or older",
      function (value) {
        return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
      }
    )
    // .typeError("")
    .required("Required! You must be 18 years or older"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Enter Your Phone Number"),
});
