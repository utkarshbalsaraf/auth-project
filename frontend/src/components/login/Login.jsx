import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      try {
        const response = await axios.post("http://localhost:5000/user/login", {
          email: values.email,
          password: values.password,
        });
        const result = await response.data;
        if (result.user._id) {
          navigate("/dashboard");
          localStorage.setItem("token", result.token)
        }else{
          console.error("Invalid credentials")
        }

        console.log("Response: ", result);
      } catch (error) {
        console.log(error.message);
      } finally {
        action.resetForm();
      }
    },
  });

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Login</h1>
      <div className="border border-2 p-3 rounded-2">
        <form onSubmit={Formik.handleSubmit}>
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

export default Login;
