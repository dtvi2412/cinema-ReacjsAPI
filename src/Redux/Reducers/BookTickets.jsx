import { BOOK_TICKETS } from "../Action/type";

let initialState = {
  listBookTicket: [],
  // ghe: [],
  checkGhe: false,
};
const BookTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TICKETS:
      state.listBookTicket = action.payload;
      return { ...state };

    case "CHANGE_CHAIR":
      let item = state.listBookTicket;

      let itemGHe = item.danhSachGhe.map((item, index) => {
        if (item.maGhe === action.maGhe) {
          return { ...item, daDat: !item.daDat };
        }
        return { ...item };
      });

      item.danhSachGhe = itemGHe;
      // state.listBookTicket = item;

      //Check ghe thuoc tinh trung giang de doi ghe
      state.checkGhe = !state.checkGhe;

      return { ...state };

    default:
      return { ...state };
  }
};
export default BookTicketReducer;
