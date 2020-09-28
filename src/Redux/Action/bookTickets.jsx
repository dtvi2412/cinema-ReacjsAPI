import { bookTicketsService } from "../../Service";
import { createAction } from ".";
import { BOOK_TICKETS } from "./type";

export const fetchBookTicketsAPI = (id) => {
  return (dispatch) => {
    bookTicketsService
      .fetchBookTickets(id)
      .then((rs) => {
        dispatch(createAction(BOOK_TICKETS, rs.data));
      })
      .catch((err) => console.log(err));
  };
};
