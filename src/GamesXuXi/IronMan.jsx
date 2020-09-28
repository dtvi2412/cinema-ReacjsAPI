import React, { Component } from "react";
import ironman from "./../Asset/Images/iron.png";
import KeoBuaBao from "./KeoBuaBao";

export default class IronMan extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {" "}
            <img src={ironman} width={100 + "%"} />
          </div>
        </div>
        <div className="row text-center">
          <KeoBuaBao />
        </div>
      </div>
    );
  }
}
