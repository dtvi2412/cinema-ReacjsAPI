import React, { Component } from "react";
import background from "../Asset/Images/background9.png";
import classes from "./../GamesXuXi/styles.module.scss";
import IronMan from "./IronMan";
import ThongTinTranDau from "./ThongTinTranDau";
import Thanos from "./Thanos";
import BanChon from "./BanChon";
export default class GameXuXi extends Component {
  render() {
    return (
      <div>
        <h1 className="text text-warning display-3 text-center">GameXuXi</h1>
        <div className={classes.background}>
          {" "}
          <img src={background} width={100 + "%"} />
          <div className={classes.xuxi}>
            {" "}
            <div className="row mb-2">
              <div className="col-12">
                {" "}
                <BanChon />
              </div>
            </div>
            <div className="row con">
              {" "}
              <div className="col-3">
                <IronMan />
              </div>
              <div className="col-6">
                <ThongTinTranDau />
              </div>
              <div className="col-3">
                <Thanos />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
