import Axios from "axios";
class CourseService {
  fetchCourse() {
    return Axios({
      type: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05",
    });
  }
  fetchCourseDetail(id) {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    });
  }
  addCourse(data) {
    const userAdmin = JSON.parse(localStorage.getItem("credentials"));
    return Axios({
      method: "POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,

      data,
      headers: {
        // Accept: `*-*`,
        Authorization: `Bearer ${userAdmin.accessToken}`,
      },
    });
  }
  deleteCourseItem(id) {
    const userAdmin = JSON.parse(localStorage.getItem("credentials"));
    return Axios({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`,
      },
    });
  }
}
export default CourseService;
