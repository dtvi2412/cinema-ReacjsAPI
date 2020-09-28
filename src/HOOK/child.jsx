import React, { memo } from "react";

const DemoHookChildren = (props) => {
  console.log("DemoHookChildren render");
  return <div></div>;
};

export default memo(DemoHookChildren);
