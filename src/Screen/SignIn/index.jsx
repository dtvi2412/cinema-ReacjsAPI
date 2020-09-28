import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInUserSchema } from "../../Service/user";
import { connect } from "react-redux";
import { login, fetchInfo } from "../../Redux/Action/user";
import { NavLink, Redirect, Link } from "react-router-dom";
import "./signIn.css";
import Axios from "axios";

// import history from "../../history";
class SignInScreen extends Component {
  // handleClick() {
  //   history.push("/");
  // }
  componentDidMount() {}
  render() {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={(values, err) => {
          this.props.dispatch(login(values, this.props.history));
        }}
        validationSchema={signInUserSchema}
        render={({ handleChange }) => (
          <>
            {" "}
            <Link to="/">
              {" "}
              <img
                className="logo__amazone"
                // src="https://pmcvariety.files.wordpress.com/2018/01/amazon-logo.jpg?w=1000"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              />
            </Link>
            <Form className="w-50 mx-auto formLogin">
              <div className="signIn">
                {" "}
                <h1 className="signIn__text">Đăng nhập</h1>
              </div>

              <div className="form-group">
                <label className="signInName">Tài khoản</label>
                <Field
                  type="text"
                  className="form-control inputForm"
                  name="taiKhoan"
                  onChange={handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label className="signInName">Mật khẩu</label>
                <Field
                  type="password"
                  className="form-control inputForm"
                  name="matKhau"
                  onChange={handleChange}
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <button
                className="dangNhap"
                // onClick={(e) => this.handleClick(e)}
              >
                Đăng nhập
              </button>
              {/* <NavLink type="submit" to="">
              Đăng nhập
            </NavLink> */}
            </Form>
          </>
        )}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    credential: state.UserReducer.credential,
  };
};
export default connect(mapStateToProps, null)(SignInScreen);
