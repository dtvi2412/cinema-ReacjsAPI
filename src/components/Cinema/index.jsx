import React, { Component } from "react";
import { connect } from "react-redux";
import { cinemaService } from "../../Service";
import Axios from "axios";
import { fetchCinema } from "../../Redux/Action/cinema";
import { createAction } from "../../Redux/Action";
import { CHOOSE_CINEMA } from "../../Redux/Action/type";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
class Cinema extends Component {
  handleChooseCinema = (id) => {
    // this.props.dispatch({
    //   type: "CHOOSE_CINEMA",
    //   data: id,
    // });
    this.props.dispatch(createAction(CHOOSE_CINEMA, id));
  };
  render() {
    return (
      <div data-aos="fade-up">
        {this.props.cinema.map((item, index) => {
          let border = {};
          if (item.maHeThongRap === this.props.chooseCumRap) {
            border = {
              border: "2px solid black",
              backgroundColor: "rgba(0,0,0,0.7)",
            };
          } else {
            border = {
              backgroundColor: "rgba(0,0,0,0.1)",
              opacity: "0.4",
            };
          }
          return (
            <AnimatePresence>
              <button
                className={`m-2 mr-3`}
                key={index}
                style={border}
                onClick={() => {
                  this.handleChooseCinema(item.maHeThongRap);
                }}
              >
                <img
                  style={{ width: "60px" }}
                  src={item.logo}
                  alt={item.logo}
                />
              </button>
            </AnimatePresence>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCinema());
    AOS.init({
      duration: 1000,
    });
  }
}
const mapStateToProps = (state) => ({
  cinema: state.CinemaReducer.cinema,
  chooseCumRap: state.CinemaReducer.chooseCinema,
});

export default connect(mapStateToProps)(Cinema);
