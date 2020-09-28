import React from "react";
import "./PopupAddFilm.scss";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addCourse } from "../../Redux/Action/course";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  tenPhim: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  biDanh: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  trailer: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  hinhAnh: Yup.string()
    .min(2, "Too Short!")

    .required("Required"),
  moTa: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  ngayKhoiChieu: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
});

const PopupAddFilm = ({ handleClose, dispatch }) => {
  const history = useHistory();
  return (
    <div className="popupAdd">
      <div className="popupAdd__content">
        <div className="popupAdd__content__close" onClick={handleClose}>
          <CancelPresentationIcon />
        </div>
        <h3 className="popupAdd__content__name">Add film</h3>
        <Formik
          initialValues={{
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: "",
            moTa: "",
            maNhom: "",
            ngayKhoiChieu: "24/12/2020",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // console.log(JSON.stringify(values, null, 2));

              dispatch(addCourse(values, history));
              setSubmitting(false);
              handleClose();
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="popupAdd__content__add">
              <label className="popupAdd__content__add__text">Tên phim</label>
              <Field type="text" name="tenPhim" />

              <ErrorMessage
                name="tenPhim"
                render={(msg) => (
                  <div className="text text-danger text-bold">{msg}</div>
                )}
              />
              <label className="popupAdd__content__add__text">Bí danh</label>
              <Field type="text" name="biDanh" />
              <ErrorMessage
                name="biDanh"
                render={(msg) => (
                  <div className="text text-danger text-bold">{msg}</div>
                )}
              />
              <label className="popupAdd__content__add__text">Trailer</label>
              <Field type="text" name="trailer" />
              <ErrorMessage
                name="trailer"
                render={(msg) => (
                  <div className="text text-danger text-bold">{msg}</div>
                )}
              />
              <label className="popupAdd__content__add__text">Hình ảnh</label>
              <Field type="text" name="hinhAnh" />
              <ErrorMessage
                name="hinhAnh"
                render={(msg) => (
                  <div className="text text-danger text-bold">{msg}</div>
                )}
              />
              <label className="popupAdd__content__add__text">Mô tả</label>
              <Field component="textarea" name="moTa" />
              <ErrorMessage
                name="moTa"
                render={(msg) => (
                  <div className="text text-danger text-bold">{msg}</div>
                )}
              />
              <label className="popupAdd__content__add__text">Mã nhóm</label>
              <Field
                as="select"
                name="maNhom"
                className="popupAdd__content__add__select"
              >
                <option value="GP01">GP01</option>
                <option value="GP02">GP02</option>
                <option value="GP03">GP03</option>
                <option value="GP04">GP04</option>
                <option value="GP05">GP05</option>
                <option value="GP06">GP06</option>
                <option value="GP07">GP07</option>
                <option value="GP08">GP08</option>
                <option value="GP09">GP09</option>
                <option value="GP10">GP010</option>
              </Field>
              {/* <label className="popupAdd__content__add__text">
                Ngày khởi chiếu
              </label>
              <Field type="date" className="date" name="ngayKhoiChieu" />
              <ErrorMessage
                name="ngayKhoiChieu"
                render={(msg) => (
                  <div className="text text-danger text-bold">{msg}</div>
                )}
              /> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="popupAdd__content__add__button"
              >
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default connect()(PopupAddFilm);
