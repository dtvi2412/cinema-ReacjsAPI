import CourseItems from "../../components/CourseItem";
import {
  FETCH_COURSEDETAIL,
  DESTROY,
  FETCH_COURSE,
  ADD_COURSE,
  DELETE_COURSE_ITEM,
} from "../Action/type";

let initialState = {
  courses: [],
  courseDetail: null,
  check: true,
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE:
      state.courses = action.payload;
      return { ...state };
    case FETCH_COURSEDETAIL:
      state.courseDetail = action.payload;
      return { ...state };
    case DESTROY:
      state.courseDetail = action.payload;
      return { ...state };
    case "CHANGE_BG":
      state.check = !state.check;
      return { ...state };
    case ADD_COURSE:
      state.courses.push(action.payload);
      return { ...state };
    case DELETE_COURSE_ITEM:
      const cloneCourses = [...state.courses];

      const filterDiffentDelete = cloneCourses.filter(
        (item) => item.maPhim !== action.id
      );

      state.courses = filterDiffentDelete;
      return { ...state };
    default:
      return state;
  }
};
export default CourseReducer;
