import React, { Component, lazy } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { createAction } from "./Redux/Action";
import { FETCH_CREDENTIALS } from "./Redux/Action/type";

import "./App.css";

import HomePage from "./Templates/HomePage";
import AdminPage from "./Templates/AdminPage";
// const Home = React.lazy(() => import("./Screen/Home/index"));
// const CourseDetail = React.lazy(() => import("./Screen/Detail/index"));

const Home = lazy(() => import("./Screen/Home/index"));

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          {" "}
          <Switch>
            {" "}
            <Route exact={false} path="/admin" component={AdminPage} />
            <Route path="/" component={HomePage} />{" "}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
  __getCredentialFromLocal = () => {
    const credentialStr = localStorage.getItem("credentials");
    if (credentialStr) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIALS, JSON.parse(credentialStr))
      );
    }
  };
  componentDidMount() {
    this.__getCredentialFromLocal();
  }
}

export default connect()(App);
