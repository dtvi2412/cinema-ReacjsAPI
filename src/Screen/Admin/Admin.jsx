import React from "react";

import {} from "react-router-dom";
import "./Admin.scss";
import NavAdmin from "../../components/NavAdmin/NavAdmin";
import { useEffect } from "react";
import { useState } from "react";
import AdminCard from "../../components/AdminCard/AdminCard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListFilmAdmin from "../../components/ListFilmAdmin/ListFilmAdmin";

function Admin() {
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    const nameAdmin = JSON.parse(localStorage.getItem("credentials"));
    setAdmin(nameAdmin);
  }, []);
  return (
    <div className="admin">
      <NavAdmin admin={admin} />

      <div className="admin__content">
        <Switch>
          {" "}
          <Route component={ListFilmAdmin} path="/admin/list-film" />
          <Route
            path="/admin"
            exact={false}
            component={() => {
              return <AdminCard admin={admin} />;
            }}
          />{" "}
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
