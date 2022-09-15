import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRegister } from "../Redux/actions/actionCreator";

import "./login.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      if (values.password === values.confirmPassword) {
        navigate("/");
        dispatch(setRegister(values));
      } else {
        alert("Password and Confirm Password is not same");
      }
    },
  });
  return (
    <div>
      <div class="fullscreen-container">
        <div class="container1">
          <div class="heading">
            <h1>
              Register <span>Redux</span>
            </h1>
          </div>

          <div class="form-container">
            <form onSubmit={formik.handleSubmit}>
              <div class="input-group">
                <label for="name" style={{ color: "white" }}>
                  UserName
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="input-group">
                <label for="email" style={{ color: "white" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="input-group">
                <label for="password" style={{ color: "white" }}>
                  Password
                </label>
                <input
                  type="Password"
                  id="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="input-group">
                <label for="confirm-password" style={{ color: "white" }}>
                  Confirm Password
                </label>
                <input
                  type="Password"
                  id="confirm-password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
              </div>
              <button type="submit">Join Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
