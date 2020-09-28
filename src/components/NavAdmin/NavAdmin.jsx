import React, { useState } from "react";
import "./NavAdmin.scss";
import { NavLink, useHistory, Link } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PostAddIcon from "@material-ui/icons/PostAdd";
import EditIcon from "@material-ui/icons/Edit";
import ListIcon from "@material-ui/icons/List";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch } from "react-redux";
import { createAction } from "../../Redux/Action";
import { LOG_OUT } from "../../Redux/Action/type";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
function NavAdmin({ admin }) {
  const [logOut, setLogOut] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const getAdmin = localStorage.getItem("credentials");

    if (getAdmin) {
      localStorage.removeItem("credentials");

      dispatch(createAction(LOG_OUT, null));
      history.push("/");
    }
  };
  return (
    <div className="nav">
      <div className="nav__left">
        <div className="nav__left__nav">
          {" "}
          <div className="nav__left__nav__logo">
            <AccountCircleIcon />
            <span
              className="nav__left__nav__item__text "
              onClick={() => {
                setLogOut(!logOut);
              }}
            >
              {admin.hoTen}
            </span>
            {logOut && (
              <>
                <Link to="/" className="logout" onClick={handleLogOut}>
                  {" "}
                  <ExitToAppIcon />
                  LOGOUT
                </Link>
              </>
            )}
          </div>
          <NavLink to="/admin/list-film">
            {" "}
            <div className="nav__left__nav__item">
              <ListIcon />
              <span className="nav__left__nav__item__text">List Film</span>
            </div>
          </NavLink>
          <NavLink to="/admin/add-film">
            <div className="nav__left__nav__item">
              <PostAddIcon />{" "}
              <span className="nav__left__nav__item__text">Add Film</span>
            </div>
          </NavLink>
          <NavLink to="/">
            {" "}
            <div className="nav__left__nav__item">
              <PersonAddIcon />{" "}
              <span className="nav__left__nav__item__text">Add User</span>
            </div>
          </NavLink>
          <div className="nav__left__nav__item">
            <EditIcon /> <span className="nav__left__nav__item__text">Add</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavAdmin;
