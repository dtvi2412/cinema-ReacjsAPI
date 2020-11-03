import React, { useEffect } from "react";
import Axios from "axios";
import { connect, useDispatch } from "react-redux";
import { LICH_CHIEU } from "../../Redux/Action/type";
import { fetchLichChieu } from "../../Redux/Action/cinema";
import { createAction } from "../../Redux/Action";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss";
function LichChieu(props) {
  const { choose } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    // Axios({
    //   method: "GET",
    //   url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${props.choose}&maNhom=GP05`,
    // })
    //   .then((rs) => {
    //     props.lichChieu(rs.data);
    //     console.log(rs.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //Bien choose thay doi thi chay lai

    dispatch(fetchLichChieu(props.choose));
  }, [choose]);

  useEffect(() => {
    //nhu component componentDidMount (AXIOS)
    dispatch(fetchLichChieu(props.choose));
    AOS.init({
      duration: 1000,
    });
  }, []);
  const kiemTra = (item) => {
    const today = new Date();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let gioChieu = new Date(item.ngayChieuGioChieu).toLocaleTimeString();
    if (gioChieu > time) {
      item = gioChieu;
      console.log(item, "gio chieu ne :" + gioChieu, "gio ne :" + time);
    }
  };
  return (
    <div className="lichChieu">
      {/* {console.log(props.lichChieuList)} */}
      {props.lichChieuList.map((item, index) => {
        return (
          <div key={index} data-aos="fade-down">
            {item.lstCumRap.map((item1, index) => {
              return (
                <React.Fragment key={index}>
                  {item1.danhSachPhim.map((item2, index) => {
                    return (
                      <div key={index}>
                        <div className="row mb-2 lichChieu__content">
                          <div className="col-2 lichChieu__content__img">
                            {" "}
                            <img src={item2.hinhAnh} alt={item2.hinhAnh} />
                          </div>{" "}
                          <div className="col-2">
                            {" "}
                            <p className="lichChieu__content__text">
                              {item2.tenPhim}
                            </p>
                          </div>
                          <div className="col-8 lichChieu__content__lichChieuPhim">
                            {item2.lstLichChieuTheoPhim
                              .filter((item) => {
                                const gio = parseInt(
                                  new Date(
                                    item.ngayChieuGioChieu
                                  ).toLocaleTimeString()
                                );
                                const ngay = parseInt(
                                  new Date(
                                    item.ngayChieuGioChieu
                                  ).toLocaleDateString()
                                );
                                // new Date().getDate()
                                // new Date().getHours()
                                if (gio > new Date().getHours() && ngay > 8) {
                                  return item;
                                }

                                // console.log(
                                //   item,
                                //   new Date().getHours(),
                                //   item1,
                                //   gio,
                                //   ngay,
                                //   new Date().getDate()
                                // );
                              })

                              // .slice(0, 4)
                              .map((item3, index) => {
                                return (
                                  <Link
                                    to={`${props.user === null ? "/sign-in" : `/dat-ve/${item3.maLichChieu}`} `}
                                    target={`_blank"}`}
                                    key={index}
                                    className="muaVe"
                                  >
                                    {/* <div className="lichChieu__content__lichChieuPhim__tenRap">
                                      {item3.tenRap}
                                    </div> */}
                                    {/* filter */}
                                    {/* {kiemTra(item3)} */}
                                    {/* today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); */}
                                    {/* end */}
                                    <div className="lichChieu__content__lichChieuPhim__ngayChieu">
                                      {/* {console.log(item3.ngayChieuGioChieu)} */}
                                      <div className="lichChieu__content__lichChieuPhim__ngayChieu__gio">
                                        {" "}
                                        {new Date(item3.ngayChieuGioChieu)
                                          .toLocaleTimeString()

                                          .slice(0, 5)}
                                      </div>

                                      <div className="lichChieu__content__lichChieuPhim__ngayChieu__ngay">
                                        {" "}
                                        <span>Ngày chiếu :</span>
                                        {new Date(item3.ngayChieuGioChieu)
                                          .toLocaleDateString()
                                          .slice(0, 3)}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    lichChieuList: state.CinemaReducer.lichChieu,
    choose: state.CinemaReducer.chooseCinema,
    user : state.UserReducer.credential
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    lichChieu: (id) => {
      //   dispatch({
      //     type: LICH_CHIEU,
      //     payload: id,
      //   });
      dispatch(createAction(LICH_CHIEU, id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LichChieu);
