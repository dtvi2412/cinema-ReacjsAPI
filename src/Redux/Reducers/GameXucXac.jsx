import { BAN_CHON, SO_BAN_CHOI } from "../Action/type";

let initialState = {
  nutTaiXiu: [
    { nut: "Tài", type: "1" },
    { nut: "Xỉu", type: "2" },
  ],
  xiNgau: { num1: 1, num2: 1, num3: 1, min: 1, max: 6 },

  tongXiNgau: 0,
  soBanThang: 0,
  banChon: "1",
  tongSoBan: 0,
};
const GameXucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case BAN_CHON:
      state.banChon = action.payload;
      return { ...state };
    case SO_BAN_CHOI:
      state.tongSoBan = action.payload + 1;
      let DoiTuongXiNgau = {};
      //test
      // for (let i = 0; i < 3; i++) {

      //   let xucXacNgauNhien = {
      //     num1: Math.floor(Math.random() * 6) + 1,
      //     num2: Math.floor(Math.random() * 6) + 1,
      //     num3: Math.floor(Math.random() * 6) + 1,
      //     min: 1,
      //     max: 6,
      //   };
      //   DoiTuongXiNgau = xucXacNgauNhien;
      // }
      // state.xiNgau = DoiTuongXiNgau;
      //end test
      // const random =
      //   state.xiNgau.min +
      //   Math.floor(Math.random() * (state.xiNgau.max - state.xiNgau.min + 1));

      state.xiNgau.num1 =
        Math.floor(Math.random() * state.xiNgau.max) + state.xiNgau.min;
      state.xiNgau.num2 =
        Math.floor(Math.random() * state.xiNgau.max) + state.xiNgau.min;
      state.xiNgau.num3 =
        Math.floor(Math.random() * state.xiNgau.max) + state.xiNgau.min;

      state.tongXiNgau =
        state.xiNgau.num1 + state.xiNgau.num2 + state.xiNgau.num3;
      if (
        (state.tongXiNgau > 11 && state.banChon === "2") ||
        (state.tongXiNgau <= 12 && state.banChon === "1")
      ) {
        state.soBanThang += 1;
        return { ...state };
      }
      return { ...state };
    default:
      return state;
  }
};
export default GameXucXacReducer;
