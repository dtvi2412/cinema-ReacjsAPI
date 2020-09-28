import React from "react";

const LoadingComponent = () => {
  return (
    <div className="loadingBody">
      {" "}
      <div className="loading" style={{ position: "relative" }}>
        <span> Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
