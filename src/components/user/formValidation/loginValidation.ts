import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
  // modeOfContact: "",
  //  phoneNumber: "",
};

export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().required("Required!"),
  // modeOfContact: Yup.string().required("Required!"),
  // phoneNumber: Yup.string().when("modeOfContact", {
  //   is: "telephonemoc",
  //   then: Yup.string().required("Required"),
  // }),
});
const onSubmit = (values: any) => {
  console.log(values);
};
