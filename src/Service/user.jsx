import Axios from "axios";
import * as yup from "yup";
export const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Field is required"),
  matKhau: yup.string().required("*Field is required"),
  hoTen: yup.string().required("Field is required"),
  email: yup.string().required("Field is required").email("Email is ivalid"),
  soDt: yup
    .string()
    .required("Field is required")
    .matches(/^[0-9]+$/),
  maNhom: yup.string().required("Field is required"),
});
export const signInUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Field is required"),
  matKhau: yup.string().required("*Field is required"),
});
class UserService {
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }
  
  signIn(user) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  }
}
export default UserService;
