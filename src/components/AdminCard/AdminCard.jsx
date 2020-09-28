import React, { memo } from "react";
import { useState } from "react";

function AdminCard({ admin }) {
  // const { admin } = props;
  return <div>{admin.hoTen}</div>;
}

export default memo(AdminCard);
