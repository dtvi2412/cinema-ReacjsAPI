import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Asset/Images/netflix-logo-0.png';
import classic from './../Header/styles.module.scss';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/Action';
import { LOG_OUT } from '../../Redux/Action/type';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import AdjustIcon from '@material-ui/icons/Adjust';
import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: false,
    };
  }
  handleSignOut = () => {
    // const set = new Set(localStorage.getItem("credentials"));
    const local = localStorage.getItem('credentials');
    if (local) {
      localStorage.removeItem('credentials');
    }
    this.props.logOut();
    // this.props.dispatch(createAction(LOG_OUT, null));
  };
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.setState({
          background: true,
        });
      } else {
        this.setState({
          background: false,
        });
      }
    });
  }

  render() {
    return (
      <div classname="container-fluid ">
        <div classname="row">
          <div classname={`col-lg-12 colMe `}>
            {/* navbar-light bg-warning */}
            {/* bgNav navbar navMe navbar-expand-sm navbar-light  bg-info col-md-12 col-sm-12  */}
            <nav
              className={`${!this.state.background ? 'bgNav' : 'bgNavGray'}`}
            >
              <div
                className={`${
                  !this.state.background
                    ? 'bgNav__content'
                    : 'bgNavGray__content'
                }`}
              >
                {/* <NavLink className="navbar-brand col-lg-1 col-md-2" to="/">
                  <img
                    className="logo img-fluid"
                    src={Logo}
                    className={classic.logo}
                  />
                </NavLink> */}
                <p
                  className={classic.header__changMode}
                  onClick={this.props.handleChangeBackGroundOS}
                >
                  <SwapHorizontalCircleIcon />
                </p>
                <p
                  className={classic.header__changMode}
                  onClick={this.props.changeBG}
                >
                  <AdjustIcon />
                </p>
                <NavLink
                  // activeClassName=" nav-link navbar-brand"
                  className="navbar-brand text-light"
                  to="/"
                  exact={true}
                  activeStyle={{
                    // border: "1px solid black",

                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px',
                    backgroundColor: '#43c1bf',
                    fontWeight: 'bold',
                  }}
                >
                  Trang chủ
                </NavLink>
                <a
                  activeStyle={{
                    // border: "1px solid black",
                    borderRadius: '5px',
                    padding: '10px',
                    backgroundColor: '#43c1bf',
                    fontWeight: 'bold',
                  }}
                  href="http://todolist-dtv.surge.sh/"
                  target="_blank"
                  // to="http://todolist-dtv.surge.sh"
                  className="nav-link text-light"
                >
                  Todo app
                </a>
                {/* <NavLink
                  activeStyle={{
                    // border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: "#43c1bf",
                    fontWeight: "bold",
                    // color: "black !important",
                  }}
                  to="/game-xu-xi"
                  className="nav-link text-light"
                >
                  Game Xù Xì
                </NavLink> */}
                {/* <NavLink
                  activeStyle={{
                    // border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: "#43c1bf",
                    fontWeight: "bold",
                  }}
                  to="/demo-hook"
                  className="nav-link text-light"
                >
                  Demo HOOK
                </NavLink> */}
                {this.props.credential ? (
                  <>
                    <NavLink className="nav-link text-light" to="">
                      Hi{' '}
                      <span className="text text-uppercase text-warning">
                        {this.props.credential.hoTen}
                      </span>{' '}
                    </NavLink>
                    <NavLink
                      to=""
                      className="nav-link text-light"
                      onClick={this.handleSignOut}
                    >
                      Đăng xuát
                    </NavLink>
                  </>
                ) : (
                  <>
                    {' '}
                    <NavLink
                      className="nav-link text-light"
                      to="/sign-in"
                      activeStyle={{
                        // border: "1px solid black",
                        borderRadius: '5px',
                        padding: '10px',
                        backgroundColor: '#43c1bf',
                        fontWeight: 'bold',
                      }}
                    >
                      Đăng nhập
                    </NavLink>{' '}
                    <NavLink
                      // activeClassName=" nav-link navbar-brand"
                      className="nav-link text-light mr-2"
                      to="/sign-up"
                      exact={true}
                      activeStyle={{
                        // border: "1px solid black",
                        borderRadius: '5px',
                        padding: '10px',
                        backgroundColor: '#43c1bf',
                        fontWeight: 'bold',
                      }}
                    >
                      Đăng ký
                    </NavLink>{' '}
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  credential: state.UserReducer.credential,
});
const mapDispathToProps = (dispatch) => {
  return {
    changeBG: () => {
      dispatch({
        type: 'CHANGE_BG',
      });
    },
    logOut: () => {
      dispatch(createAction(LOG_OUT, null));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
