import React from "react";
import { useEffect } from "react";
import { fetchCourses } from "../../Redux/Action/course";
import { useDispatch, useSelector } from "react-redux";
import TableListCourseAdmin from "../TableListCourseAdmin/TableListCourseAdmin";

function ListFilmAdmin() {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.CourseReducer.courses);
  useEffect(() => {
    function fetchCourse() {
      dispatch(fetchCourses());
    }
    fetchCourse();
    return () => fetchCourse();
  }, []);
  return (
    <div>
      <TableListCourseAdmin course={course} />
    </div>
  );
}

export default ListFilmAdmin;
