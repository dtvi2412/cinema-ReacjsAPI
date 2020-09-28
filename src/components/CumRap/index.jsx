import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { fetCumRap } from "../../Redux/Action/cinema";
import "./style.scss";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
class CumRap extends Component {
  render() {
    return (
      <motion.div
        data-aos="fade-left"
        className="CumRap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {this.props.cumRap.map((item, index) => {
          return (
            <div key={index} className="table CumRap__content">
              <p className="text text-warning">{item.tenCumRap} </p>
              <span className="CumRap__content__diaChi">{item.diaChi}</span>
            </div>
          );
        })}
      </motion.div>
    );
  }
  componentDidUpdate(pP) {
    // console.log(pP);
    if (pP.chooseCinema !== this.props.chooseCinema) {
      this.props.dispatch(fetCumRap(this.props.chooseCinema));
    }
  }

  componentDidMount() {
    // Axios({
    //   method: "GET",
    //   url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.props.chooseCinema}`,
    // })
    //   .then((rs) => {
    //     this.props.dispatch({
    //       type: "CUM_RAP",
    //       payload: rs.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.props.dispatch(fetCumRap(this.props.chooseCinema));
    AOS.init({
      duration: 1000,
    });
  }
}
const mapStateToProps = (state) => {
  return {
    cumRap: state.CinemaReducer.cumRap,
    chooseCinema: state.CinemaReducer.chooseCinema,
  };
};
export default connect(mapStateToProps)(CumRap);
