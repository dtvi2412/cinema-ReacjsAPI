import { PLAY_GAME, BAN_CHON_XU_XI } from "../Action/type";

let initialState = {
  xuXi: [
    { ma: 1, hinhAnh: "/images/keo.png" },
    { ma: 2, hinhAnh: "/images/bua.png" },
    { ma: 3, hinhAnh: "/images/bao.png" },
  ],
  banChon: 1,
  botChon: 1,
  soBanThang: 0,
  soBanChoi: 0,
  nguoiWin: 0,
};
const GameXuXiReducer = (state = initialState, action) => {
  switch (action.type) {
    case BAN_CHON_XU_XI:
      state.banChon = action.payload;
      return { ...state };
    case PLAY_GAME:
      state.soBanChoi += 1;
      state.botChon = Math.floor(Math.random() * 3) + 1;
      if (
        (state.banChon === 1 && state.botChon === 3) ||
        (state.banChon === 2 && state.botChon === 1) ||
        (state.banChon === 3 && state.botChon === 2)
      ) {
        state.soBanThang += 1;
        state.nguoiWin = 1;
      }
      if (state.banChon === state.botChon) {
        state.nguoiWin = 2;
      }
      if (
        (state.banChon === 1 && state.botChon === 2) ||
        (state.banChon === 2 && state.botChon === 3) ||
        (state.banChon === 3 && state.botChon === 1)
      ) {
        state.nguoiWin = 3;
      }
      return { ...state };
    default:
      return { ...state };
  }
};
export default GameXuXiReducer;
