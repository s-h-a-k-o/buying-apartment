import * as Yup from "yup";
import { SignInType } from "@/models/user";

export const initialValues: SignInType = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().required("Required!"),
});
