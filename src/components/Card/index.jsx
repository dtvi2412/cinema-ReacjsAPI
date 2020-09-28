import React, { Component } from "react";
import "./style.scss";
import { AiFillStar } from "react-icons/ai";
import LoadingComponent from "../Loading";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baCham: "...",
      gioiHan: 30,
      moTa: this.props.courseDetail.moTa,
      anNut: true,
    };
  }
  xemThem = () => {
    console.log("1");
    this.setState({
      gioiHan: 1000,
      baCham: "",
      anNut: false,
    });
    console.log(this.state.gioiHan);
  };
  render() {
    const { courseDetail } = this.props;
    return (
      <div className="detail">
        {" "}
        {courseDetail === null ? (
          <LoadingComponent />
        ) : (
          <>
            <img
              className="card__img"
              src={courseDetail.hinhAnh}
              alt={courseDetail.hinhAnh}
            />
            <div className="detail__film">
              <h3 className="detail__film__name">
                {courseDetail.tenPhim}{" "}
                <span className="danhGia">
                  {courseDetail.danhGia}
                  <span style={{ fontSize: "15px" }}>
                    <AiFillStar />
                  </span>
                </span>{" "}
              </h3>
              <p className="detail__film__info">
                {" "}
                {/* {courseDetail.moTa.substr(0, [20])}... */}
                {courseDetail.moTa.substr(0, [this.state.gioiHan])}
                {this.state.baCham}
              </p>{" "}
              {this.state.anNut ? (
                <button
                  className="detail__film__info__more"
                  onClick={() => {
                    this.xemThem();
                  }}
                >
                  Xem thêm
                </button>
              ) : (
                <></>
              )}
              <span className="detail__film__trailer">Trailer</span>
            </div>{" "}
          </>
        )}
      </div>
    );
  }
}
