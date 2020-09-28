import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchBookTicketsAPI } from "../../Redux/Action/bookTickets";
import "./style.scss";
function BookTickets(props) {
  const dispatch = useDispatch();

  const danhSachGhe = props.listBookTicket.danhSachGhe;
  const thongTinPhim = props.listBookTicket.thongTinPhim;
  useEffect(() => {
    dispatch(fetchBookTicketsAPI(props.match.params.maLichChieu));
  }, []);

  return (
    <div className="bookTickets">
      <div className="bookTickets__content">
        <div className="bookTickets__content__table">
          {danhSachGhe ? (
            danhSachGhe.map((item, index) => {
              return (
                <button
                  key={index}
                  // className={`${props.checkGhe ? "daDat" : "chuaDat"}`}
                  className={`${item.daDat === true ? "daDat" : "chuaDat"}`}
                  onClick={() => {
                    props.changeChair(item.maGhe);
                  }}
                >
                  {item.tenGhe}
                </button>
              );
            })
          ) : (
            <>LOADING</>
          )}
        </div>
        <div className="bookTickets__content__info">
          {thongTinPhim ? (
            <>
              {" "}
              <h1>Thông tin phim</h1>
              <p>Tên phim : {thongTinPhim.tenPhim} </p>
              <p>Tên rạp : {thongTinPhim.tenRap}</p>
              <p>Giờ chiếu : {thongTinPhim.gioChieu}</p>
              <img
                src={thongTinPhim.hinhAnh}
                className="bookTickets__content__info__img"
              />
              <p>Ngày chiếu : {thongTinPhim.ngayChieu}</p>
            </>
          ) : (
            <>LOADING</>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    listBookTicket: state.BookTicketReducer.listBookTicket,
    checkGhe: state.BookTicketReducer.checkGhe,
  };
};
const mapDispatchToProps = (dispath) => {
  return {
    changeChair: (maGhe) => {
      dispath({
        type: "CHANGE_CHAIR",
        maGhe,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookTickets);
