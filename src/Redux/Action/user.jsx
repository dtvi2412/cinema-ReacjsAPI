import { userService } from "../../Service";
import { createAction } from ".";
import { FETCH_CREDENTIALS } from "./type";
import React, { Component } from "react";

export const login = (user, history) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        localStorage.setItem("credentials", JSON.stringify(res.data));

        dispatch(createAction(FETCH_CREDENTIALS, res.data));
        const localstr = JSON.parse(localStorage.getItem("credentials"));
        if (localstr.maLoaiNguoiDung === "QuanTri") {
          history.push("/admin");
        } else if (localstr.maLoaiNguoiDung === "KhachHang") {
          history.push("/");
        } else if (localstr === "") {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          // console.log(err.response);
          alert(err.response.data);
        } else if (err.request) {
          alert("REQUEST FAIL");
        }
      });
  };
};
export const signUp = (user, history) => {
  return (dispatch) => {
    userService
      .signUp(user)
      .then((rs) => {
        localStorage.setItem("credentials", JSON.stringify(rs.data));
        dispatch(createAction("SIGN_UP", rs.data));

        alert("Chúc mừng bạn đã đăng ký thành công!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);

        alert(err);
      });
  };
};
