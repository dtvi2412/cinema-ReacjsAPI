import { CINEMA, CHOOSE_CINEMA, CUM_RAP, LICH_CHIEU } from "../Action/type";

let initialState = {
  cinema: [],
  cumRap: [],
  lichChieu: [],
  chooseCinema: "BHDStar",
};
const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CINEMA:
      state.cinema = action.payload;
      return { ...state };
    case CHOOSE_CINEMA:
      state.chooseCinema = action.payload;
      return { ...state };
    case CUM_RAP:
      state.cumRap = action.payload;
      return { ...state };
    case LICH_CHIEU:
      state.lichChieu = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default CinemaReducer;
