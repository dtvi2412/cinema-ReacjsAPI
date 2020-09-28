import React, { Component } from "react";
import Logo from "../Asset/Images/background3.png";
import XiNgau from "./xiNgau";
import classes from "./styles.module.scss";
export default class GameXucXac extends Component {
  render() {
    return (
      <div>
        <h1 className="text-warning display-3 text-center ">Game Xúc Xắc</h1>
        <div className={`${classes.backgroundGame} container`}>
          {" "}
          <img src={Logo} width={100 + "%"} />
          <div className={classes.xiNgau}>
            <div className="row">
              <div className="col-12 mt-5">
                {" "}
                <XiNgau />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
