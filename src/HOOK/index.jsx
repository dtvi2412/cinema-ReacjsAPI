import React, { useState, useEffect, useCallback } from "react";
import DemoHookChildren from "./child";
const DemoHOOK = () => {
  const [count, setCount] = useState(0);
  const [inAgree, setArgee] = useState(false);
  const increseCount = () => {
    if (inAgree) {
      setCount(count + 1);
    }
  };
  const increseCountCallBack = useCallback(() => increseCount, []);
  const argeeToChange = () => {
    setArgee(true);
  };
  useEffect(() => {
    console.log("useEffect just run one in the first time");
  }, []);
  useEffect(() => {
    console.log("useEffect run!");
  });
  return (
    <div>
      <h1>DEMO HOOK</h1>
      <button className="btn btn-warning" onClick={increseCount}>
        Increse Count
      </button>
      <button className="btn btn-warning" onClick={argeeToChange}>
        Increse Count
      </button>
      <h2>Count: {count}</h2>{" "}
      <DemoHookChildren count={count} increaCount={increseCountCallBack} />
    </div>
  );
};

export default DemoHOOK;
