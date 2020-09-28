import { cinemaService } from "../../Service";
import { createAction } from ".";
import { CINEMA, CUM_RAP, LICH_CHIEU } from "./type";

export const fetchCinema = () => {
  return (dispatch) => {
    cinemaService
      .fetchCinema()
      .then((rs) => {
        dispatch(createAction(CINEMA, rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetCumRap = (id) => {
  return (dispatch) => {
    cinemaService
      .fetchCumRap(id)
      .then((rs) => {
        dispatch(createAction(CUM_RAP, rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchLichChieu = (id) => {
  return (dispatch) => {
    cinemaService
      .fetchLichChieu(id)
      .then((rs) => {
        // console.log("lich chieu" + rs.data);
        dispatch(createAction(LICH_CHIEU, rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
