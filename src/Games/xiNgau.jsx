import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../Redux/Action";
import { BAN_CHON, SO_BAN_CHOI } from "../Redux/Action/type";
import classes from "./../Games/styles.module.scss";

class XiNgau extends Component {
  constructor(props) {
    super();
    this.state = {
      choose: true,
    };
  }
  handleBanChon = (payload) => {
    this.props.dispatch(createAction(BAN_CHON, payload));
  };
  handleSoBanChoi = (payload) => {
    this.props.dispatch(createAction(SO_BAN_CHOI, payload));
  };
  handleNutXiNgau = () => {
    console.log(this.props.nutTaiXiu);
    return this.props.nutTaiXiu.map((item, index) => {
      return (
        <div className="col-4 m-4 mt-5" key={index}>
          {" "}
          <button
            className={`btn  active  btn-primary p-5 display-3 font-italic font-weight-bold m-4 ${classes.nutMe}`}
            onClick={() => {
              this.handleBanChon(item.type);
            }}
          >
            {item.nut}
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.handleNutXiNgau()}</div>
        <div className="row">
          <div className="col-12 text-center">
            <span className={`btn btn-light ${classes.fontXiNgau}`}>
              <img src={`./images/${this.props.xiNgau.num1}.png`} />
              {/* {this.props.xiNgau.num1} */}
            </span>
            <span className={`btn btn-light ${classes.fontXiNgau}`}>
              {" "}
              <img src={`./images/${this.props.xiNgau.num2}.png`} />
              {/* {this.props.xiNgau.num2} */}
            </span>
            <span className={`btn btn-light ${classes.fontXiNgau}`}>
              {" "}
              <img src={`./images/${this.props.xiNgau.num3}.png`} />
              {/* {this.props.xiNgau.num3} */}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2
              className={` text-dark font-weight-bolder font-weight-boldtext-center display-3 ${classes.fontWBC}`}
            >
              Bạn chọn :{" "}
              {this.props.banChon === "1" ? (
                <span className="text text-danger">Tài</span>
              ) : (
                <span className="text text-danger">Xỉu</span>
              )}
            </h2>
            <h2
              className={`text text-center text-dark font-weight-bolder font-weight-bold ${classes.fontWSBT}`}
            >
              Số bàn thắng :
              <span className="text text-primary">
                {" "}
                {this.props.soBanThang}
              </span>
            </h2>
            <h2
              className={`text-dark font-weight-bolder font-weight-boldt text-center ${classes.fontWSBC}`}
            >
              Số bàn chơi :{" "}
              <span className="text text-success"> {this.props.soBanChoi}</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button
              className={`btn btn-success display-3 text-dark font-weight-bolder font-weight-bold text-center ${classes.fontW} `}
              onClick={() => {
                this.handleSoBanChoi(this.props.soBanChoi);
              }}
            >
              Play game
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nutTaiXiu: state.GameXucXacReducer.nutTaiXiu,
    banChon: state.GameXucXacReducer.banChon,
    soBanChoi: state.GameXucXacReducer.tongSoBan,
    xiNgau: state.GameXucXacReducer.xiNgau,
    soBanThang: state.GameXucXacReducer.soBanThang,
  };
};
export default connect(mapStateToProps, null)(XiNgau);
