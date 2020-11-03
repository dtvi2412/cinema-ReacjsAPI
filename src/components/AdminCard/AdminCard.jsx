import React, { memo } from "react";
import { useState } from "react";
import "./AdminCard.scss";

function AdminCard({ admin }) {
  // const { admin } = props;
  return (
    <div className="adminCard">
      <div className="adminCard__content">
        <div className="adminCard__content__box">
          <p>Họ tên : {admin.hoTen}</p>
          <p>Email : {admin.email}</p>
          <p>Số điện thoại : {admin.soDT}</p>
          <p>
            Người dùng : {admin.maLoaiNguoiDung === "QuanTri" && "Quản Trị"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(AdminCard);
