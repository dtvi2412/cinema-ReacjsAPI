// const { courseService } = require("../../Service");
// const { FETCH_COURSE } = require("./type");
// const { createAction } = require(".");
import { courseService } from "../../Service";
import {
  ADD_COURSE,
  DELETE_COURSE_ITEM,
  FETCH_COURSE,
  FETCH_COURSEDETAIL,
} from "./type";
import { createAction } from "./index";

export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((result) => {
        dispatch(createAction(FETCH_COURSE, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchCourseDetail = (id) => {
  return (dispatch) => {
    courseService
      .fetchCourseDetail(id)
      .then((rs) => {
        dispatch(createAction(FETCH_COURSEDETAIL, rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const addCourse = (data, history) => {
  return (dispatch) => {
    courseService
      .addCourse(data)
      .then((rs, status) => {
        // console.log(createAction(ADD_COURSE, rs.data));
        dispatch(createAction(ADD_COURSE, rs.data));
        alert("Thêm thành công!");
        history.push("/admin/list-film");
      })
      .catch((err) => {
        alert("Có lỗi khi thêm!");
        console.log(err);
      });
  };
};

//delte Course Item
export const deleteCourseItem = (id, history) => {
  return (dispatch) => {
    courseService
      .deleteCourseItem(id)
      .then((rs) => {
        // console.log("rs.data", rs, id);
        dispatch(createAction(DELETE_COURSE_ITEM, rs.data, id));
        history.push("/admin/list-film");
        // alert("Xóa thành công!");
        // console.log(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
