import React, { Component } from "react";
import { connect } from "react-redux";
import { BAN_CHON_XU_XI } from "../Redux/Action/type";
import { createAction } from "../Redux/Action";

class KeoBuaBao extends Component {
  renderXuXi = () => {
    return this.props.xuXi.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          {" "}
          <img
            src={item.hinhAnh}
            width={40}
            onClick={() => {
              this.props.banChon(item.ma);
            }}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row mt-2">{this.renderXuXi()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    xuXi: state.GameXuXiReducer.xuXi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    banChon: (payload) => {
      dispatch(createAction(BAN_CHON_XU_XI, payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KeoBuaBao);
