import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { userService } from "../../Service";
import { signUpUserSchema } from "../../Service/user";

import { signUp } from "./../../Redux/Action/user";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignUp extends Component {
  _handleSubmit = (values) => {
    console.log(values);
    this.props.dispatch(signUp(values, this.props.history));
  };
  render() {
    return (
      <div className="w-50 mx-auto ">
        <Link to="/">
          {" "}
          <img
            className="logo__amazone"
            // src="https://pmcvariety.files.wordpress.com/2018/01/amazon-logo.jpg?w=1000"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          />
        </Link>
        <h3 className="mt-5 text-center text-white ">Sign up</h3>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
            hoTen: "",
          }}
          validationSchema={signUpUserSchema}
          onSubmit={this._handleSubmit}
        >
          {(formikProps) => (
            <Form>
              <div className="form-group">
                <label className="text-white"> Tài khoản:</label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label className="text-white">Mật khẩu</label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />{" "}
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label className="text-white">Họ tên:</label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />{" "}
                <ErrorMessage name="hoTen">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label className="text-white">Email:</label>
                <Field
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                />{" "}
                <ErrorMessage name="email">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label className="text-white">Số điện thoại:</label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDt"
                  onChange={formikProps.handleChange}
                />{" "}
                <ErrorMessage name="soDt">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label className="text-white">Mã nhóm:</label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP010</option>
                </Field>
                <ErrorMessage name="maNhom  ">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="text-center form-group">
                <button className="btn btn-success">Submit</button>
              </div>
            </Form>
          )}
          {/* return={(formikProps) => (
   
          )} */}
        </Formik>
      </div>
    );
  }
}
export default connect()(SignUp);
