import React, { Component } from "react";
import { connect } from "react-redux";
import { PLAY_GAME } from "../Redux/Action/type";
import { createAction } from "../Redux/Action";
class ThongTinTranDau extends Component {
  renderNguoiWIN = () => {
    const { nguoiWin } = this.props;
    if (nguoiWin === 0) {
      return <span className="text text-white">Vào trận chứ bạn</span>;
    }
    if (nguoiWin === 1) {
      return <span className="text text-success">Thanos méo có tuổi OK!</span>;
    }
    if (nguoiWin === 2) {
      return <span className="text text-warning">Hòa thôi làm gì căng</span>;
    }
    if (nguoiWin === 3) {
      return <span className="text text-danger">Thua rồi!</span>;
    }
  };
  render() {
    return (
      <div className="text-center">
        <h1 className="text text-warning display-4">{this.renderNguoiWIN()}</h1>
        <h2 className="text text-success">
          Số bàn thắng :
          <span className="text text-warning">{this.props.soBanThang}</span>
        </h2>
        <h2 className="text text-success">
          Số bàn chơi :{" "}
          <span className="text text-primary">{this.props.soBanChoi}</span>
        </h2>
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.playGame();
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  soBanThang: state.GameXuXiReducer.soBanThang,
  soBanChoi: state.GameXuXiReducer.soBanChoi,
  nguoiWin: state.GameXuXiReducer.nguoiWin,
});
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      // let count = 0;
      // let randomItem = setInterval(() => {
      //   count++;
      //   if (count > 10) {
      //     clearInterval(randomItem);
      //   }
      // }, 100);
      dispatch(createAction(PLAY_GAME));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTranDau);
