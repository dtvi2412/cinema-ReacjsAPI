import { BOOK_TICKETS } from '../Action/type';

let initialState = {
  listBookTicket: [],
  // ghe: [],
  checkGhe: false,
  dangChon: false,
  tongTien: 0,
};
const BookTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TICKETS:
      state.listBookTicket = action.payload;
      return { ...state };

    case 'CHANGE_CHAIR':
      let item = state.listBookTicket;

      let itemGHe = item.danhSachGhe.map((item, index) => {
        if (item.daDat === false) {
          if (item.maGhe === action.maGhe) {
            // state.dangChon = !state.dangChon;

            return { ...item, dangChon: !item.dangChon };
          }
          return { ...item };
          // return { ...item, daDat: !item.daDat };
        }

        return { ...item };
      });

      item.danhSachGhe = itemGHe;
      // state.listBookTicket = item;

      //Check ghe thuoc tinh trung giang de doi ghe
      state.checkGhe = !state.checkGhe;

      return { ...state };
    case 'TOTAL':
      console.log(action.giaVe, action.maGhe);
      let itemA = state.listBookTicket;
      // let itemA = [...state.listBookTicket];
      const getToal = (basket) => {
        basket.reduce((amount, item) => {
          return amount + item.giaVe;
        }, 0);
      };

      let itemGhe = itemA.danhSachGhe.map((item) => {
        if (item?.dangChon === true && item.maGhe === action.maGhe) {
          // console.log(getToal(item));
          state.tongTien += action.giaVe;
          return { ...item };
        } else if (item?.dangChon === false && item.maGhe === action.maGhe) {
          if (state.tongTien >= 0 && item.maGhe === action.maGhe) {
            state.tongTien -= action.giaVe;
            return { ...item };
          }
          if (state.tongTien < 0) {
            state.tongTien = 0;
            return { ...item };
          }
        }
        return { ...item };
      });
      itemA.danhSachGhe = itemGhe;

      return { ...state };
    default:
      return { ...state };
  }
};
export default BookTicketReducer;
