import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "../Redux/actions/actionCreator";
import instance from "../Redux/api";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",

      password: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await instance.post(`/api/auth/`, values);
        localStorage.setItem("react_app_token", res.data.token);

        alert(res.data.message);
        if (res.data.message === "Successfully Logged In !!") {
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <div className="fullscreen-container">
        <div className="container1">
          <div className="heading">
            <h1>
              Login <span>Redux</span>
            </h1>
          </div>

          <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
              <div className="input-group">
                <label for="name" style={{ color: "white" }}>
                  User Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="input-group">
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
              <div className="input-group">
                <Link className="link" to={"/register"}>
                  Not User? Click to Register
                </Link>
              </div>
              <button>Login</button>
              <div>
                For Testing: <br />
                username: pavi <br />
                password: 123
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
