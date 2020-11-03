import React, { Component, Suspense } from 'react';
// import Home from "./Screen/Home";
import './HomePage.scss';
import Home from '../Screen/Home';
import LoadingComponent from '../components/Loading';
import BackToTop from 'react-back-to-top-button';
// import GirdMe from "../components/GirdMe";
import Header from '../Layouts/Header';
import { Route, Switch } from 'react-router-dom';
import BookTickets from '../Screen/BookTickets';
import CourseDetail from '../Screen/Detail/index';
import SignUp from '../Screen/SignUp';
import SignInScreen from '../Screen/SignIn/index';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useState } from 'react';
import Footer from '../Layouts/Footer/Footer';
// import DemoHOOK from "../HOOK/index";
function HomePage() {
  const [backgroundOutSide, setBackgroundOutSide] = useState(false);
  const [bgInSide, setBgInside] = useState(false);
  const handleChangeBackGroundOS = () => {
    setBackgroundOutSide(!backgroundOutSide);
  };
  const handleBgInside = () => {
    setBgInside(!bgInSide);
  };

  return (
    <Suspense fallback={<LoadingComponent />}>
      {' '}
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={500}
        easing="easeInOutQuint"
      >
        <span className="backToTop">
          <ArrowUpwardIcon />
        </span>
      </BackToTop>
      <div className="home__header">
        {' '}
        <Header
          handleChangeBackGroundOS={handleChangeBackGroundOS}
          handleBgInside={handleBgInside}
        />
      </div>
      <div className={`${backgroundOutSide ? 'modeFir' : 'modeSecond'}`}>
        <div className="container p-0  ">
          <div className="row">
            <div className="col-12">
              {/* Header */}
              <Switch>
                {' '}
                <Route path="/dat-ve/:maLichChieu" component={BookTickets} />
                <Route path="/detail/:courseID" component={CourseDetail} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/sign-in" component={SignInScreen} />
                {/* <Route path="/demo-hook" component={DemoHOOK} /> */}
                {/* <Route path="/game-xuc-xac" component={GameXucXac} />
            <Route path="/game-xu-xi" component={GameXuXi} /> */}{' '}
                <Route
                  path="/"
                  //   component={Home}
                  component={() => <Home bgInSide={bgInSide} />}
                />
              </Switch>{' '}
              {/* <GirdMe /> */}
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>{' '}
    </Suspense>
  );
}

export default HomePage;
