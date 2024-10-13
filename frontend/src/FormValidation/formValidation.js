import * as Yup from "yup";

export let signupSchema = Yup.object({
  fname: Yup.string()
    .min(2, "Please enter more than two words")
    .required("Please enter name"),
  email: Yup.string().email().min(2).required("Please enter email"),
  password: Yup.string().min(2).required("Please enter password"),
  confirm_password: Yup.string()
    .required("Please enter password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
