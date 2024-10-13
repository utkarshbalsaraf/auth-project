import { useFormik } from "formik";
import React from "react";
import { signupSchema } from "../../FormValidation/formValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fname: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Signup() {
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    validateOnChange: true,
    onSubmit: async (values,action) =>  {
      try {
        const response = await axios.post("http://localhost:5000/user/register", {
          fname: values.fname,
          email: values.email,
          password: values.password,
        });
        navigate("/login")
        console.log("Response: ", response.data);
      } catch (error) {
        console.log(error.message);
      }finally{
        action.resetForm();
      }
    },
  });

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Signup</h1>
      <div className="border border-2 p-3 rounded-2">
        <form onSubmit={Formik.handleSubmit}>
          <div>
            <label className="form-label" htmlFor="fname">
              Name
            </label>
            <input
              className="form-control"
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
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
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
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
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
            <label className="form-label" htmlFor="confirm_password">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              id="confirm_password"
              value={Formik.values.confirm_password}
              onChange={Formik.handleChange}
            />
            {Formik.errors.confirm_password &&
            Formik.touched.confirm_password ? (
              <span>{Formik.errors.confirm_password}</span>
            ) : null}
          </div>
          <div className="py-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
