import React from "react";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import "./PopupDeleteFilm.scss";
import { deleteCourseItem } from "../../Redux/Action/course";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PopupDeleteFilm = ({ handleCloseDelete, del, dispatch }) => {
  const history = useHistory();
  const handleDeleteCourseItem = (id) => {
    dispatch(deleteCourseItem(id, history));
    handleCloseDelete();
  };
  return (
    <div className="popupDelete">
      <div className="popupDelete__content">
        <div className="popupDeleteLine" />
        <div
          className="popupDelete__content__close"
          onClick={handleCloseDelete}
        >
          {" "}
          <CancelPresentationIcon />
        </div>
        <div className="popupDelete__content__choose">
          <p className="popupDelete__content__choose__text">
            Are you sure you want to delete?
          </p>
          <div className="popupDelete__content__choose__yesOrNo">
            <button
              className="popupDelete__content__choose__yesOrNo__yes Yn"
              onClick={() => {
                handleDeleteCourseItem(del);
              }}
            >
              Yes
            </button>
            <button
              className="popupDelete__content__choose__yesOrNo__no Yn"
              onClick={handleCloseDelete}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(PopupDeleteFilm);
