import React from "react";
import { Redirect, Link } from "react-router-dom";
import Admin from "../Screen/Admin/Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function AdminPage() {
  const str = JSON.parse(localStorage.getItem("credentials"));

  if (str?.maLoaiNguoiDung === "QuanTri") {
    return (
      <div>
        <Admin />
      </div>
    );
  } else if (str?.maLoaiNguoiDung === "KhachHang") {
    return <Redirect to="/" />;
  } else if (!str) {
    return <Redirect to="/" />;
  }
}

export default AdminPage;
