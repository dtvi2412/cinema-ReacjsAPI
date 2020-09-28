import { combineReducers } from "redux";
import CourseReducer from "./CourseReducer";
import UserReducer from "./UserReducer";
import GameXucXacReducer from "./GameXucXac";
import GameXuXiReducer from "./GameXuXi";
import CinemaReducer from "./CinemaReducer";
import BookTicketReducer from "./BookTickets";
const RootReducer = combineReducers({
  CourseReducer: CourseReducer,
  UserReducer,
  GameXucXacReducer,
  GameXuXiReducer,
  CinemaReducer,
  BookTicketReducer,
});
export default RootReducer;
