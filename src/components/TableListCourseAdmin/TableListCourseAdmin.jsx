import React from "react";
import "./TableListCourseAdmin.scss";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

import MicIcon from "@material-ui/icons/Mic";
import { useRecognition } from "react-web-voice";
import { useEffect } from "react";
import PopupAddFilm from "../PopupAddFilm/PopupAddFilm";
import PopupDeleteFilm from "../PopupDeleteFilm/PopupDeleteFilm";

function TableListCourseAdmin({ course }) {
  //VIEW MORE
  const [count, setCount] = useState(10);
  const handleCount = () => {
    setCount(count + 5);
    console.log(count);
  };
  //search
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  //Array filter search
  const filterS = course?.filter((item) => {
    return item.tenPhim.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const { transcripts, listen } = useRecognition();
  useEffect(() => {});

  const listenButtonHandler = async () => {
    const transcript = await listen();

    setSearch(transcript);
  };
  //Popup add
  const [popupAdd, setPopupAdd] = useState(false);
  const handlePopupAdd = () => {
    setPopupAdd(true);
  };
  const handleClose = () => {
    setPopupAdd(false);
  };
  //Popup delete
  const [popupDelete, setPopupDelete] = useState(false);
  const [del, setDel] = useState("");

  const handlePopupDelete = (id) => {
    // setDel(id);
    console.log(id);
    setDel(id);
    // console.log(del);
    setPopupDelete(true);
  };
  const handleCloseDelete = () => {
    setPopupDelete(false);
  };
  return (
    <React.Fragment>
      <div className="search">
        <div>
          <label>
            <SearchIcon />
          </label>
          <input
            className="search__input"
            type="text"
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>{" "}
        <div className="voice">
          <button onClick={listenButtonHandler}>
            <MicIcon />
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <th>Mã</th>
          <th>Tên phim</th>
          <th>Hình</th>
          <th>Mô tả</th>
          <th>Thêm</th>
          <th>Xóa</th>
          <th>Sửa</th>
        </thead>
        <tbody>
          {filterS?.slice(0, count).map((item) => {
            return (
              <>
                {" "}
                <tr key={item.maPhim}>
                  <td>{item.maPhim}</td>
                  <td>{item.tenPhim}</td>
                  <td>
                    <img alt="hinh" width={50} src={item.hinhAnh} />
                  </td>
                  <td>
                    {item.moTa.length > 100
                      ? item.moTa.substr(0, 200) + "..."
                      : item.moTa}
                  </td>
                  <td>
                    <button
                      className="table__button button__them"
                      onClick={handlePopupAdd}
                    >
                      <AddIcon />
                    </button>
                  </td>
                  <td>
                    <button
                      className="table__button button__xoa"
                      onClick={() => {
                        handlePopupDelete(item.maPhim);
                      }}
                    >
                      <DeleteForeverIcon />
                    </button>
                  </td>
                  <td>
                    <button className="table__button button__sua">
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {count < filterS?.length && (
        <button className="button__loadMore " onClick={handleCount}>
          Xem thêm
        </button>
      )}
      {/* PopupAdd */}
      {popupAdd && <PopupAddFilm handleClose={handleClose} />}
      {/* PopupDelete */}
      {popupDelete && (
        <PopupDeleteFilm
          handleCloseDelete={handleCloseDelete}
          handleDelte={handlePopupDelete}
          del={del}
        />
      )}
    </React.Fragment>
  );
}

export default TableListCourseAdmin;
