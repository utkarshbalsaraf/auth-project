import { useFormik } from "formik";
import React from "react";
import { signupSchema } from "../../FormValidation/formValidation";

const initialValues = {
  fname: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Signup() {
  const Formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    validateOnChange:true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Signup</h1>
      <div>
        <form onSubmit={Formik.handleSubmit}>
          <div>
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={Formik.values.fname}
              onChange={Formik.handleChange}
            />
            {Formik.errors.fname && Formik.touched.fname ? (
              <span>{Formik.errors.fname}</span>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
            />
            {Formik.errors.email && Formik.touched.email ? (
              <span>{Formik.errors.email}</span>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={Formik.values.password}
              onChange={Formik.handleChange}
            />
            {Formik.errors.password && Formik.touched.password ? (
              <span>{Formik.errors.password}</span>
            ) : null}
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              value={Formik.values.confirm_password}
              onChange={Formik.handleChange}
            />
            {Formik.errors.confirm_password && Formik.touched.confirm_password ? (
              <span>{Formik.errors.confirm_password}</span>
            ) : null}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
