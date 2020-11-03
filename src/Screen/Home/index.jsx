import React, { Component } from 'react';
import CourseItems from '../../components/CourseItem';
import Header from '../../Layouts/Header';

import { connect } from 'react-redux';

import { fetchCourses } from '../../Redux/Action/course';
import Cinema from '../../components/Cinema';
import CumRap from '../../components/CumRap';
import LichChieu from '../../components/LichChieu';
import '../Home/style.scss';
import CarouselHome from '../../components/Carousel';
import { Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SearchIcon from '@material-ui/icons/Search';
import GirdMe from '../../components/GirdMe';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiable: 8,
      redirect: true,
      search: '',
    };
    this.loadMore = this.loadMore.bind(this);
  }
  loadMore = () => {
    this.setState((old) => {
      return {
        visiable: old.visiable + 4,
      };
    });
  };
  handleClick = () => {
    if (this.state.redirect) {
      // alert(1);
      return <Redirect to="/game-xuc-xac" />;
    }
  };
  shouldComponentUpdate() {
    if (this.state.redirect) {
      // alert(1);
      return <Redirect to="/game-xuc-xac" />;
    }
  }
  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    // console.log("SEARCH", this.state.search);
    const { search } = this.state;
    const filterCourseItem = this.props.courseList.filter((item) => {
      return item.tenPhim.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return (
      <div
        className={` pb-5 ${
          this.props.bgChange ? 'backgroundChange' : 'background'
        }`}
      >
        {' '}
        <div className="">
          <div className="home__carousel ">
            {' '}
            <CarouselHome />
          </div>

          <h1
            data-aos="slide-right"
            onClick={this.handleClick}
            className=" display-4 font-weight-bold font-italic font-weight-light font-weight-lighter text-center mb-5 danhSachPhim"
          >
            Danh sách phim
          </h1>
          <div className="home__search" data-aos="fade-left">
            {/* <SearchIcon /> */}
            <input
              className="home__search__input"
              type="text"
              placeholder="Search movie"
              onChange={this.onChange}
            />
          </div>

          <div className="row">
            {filterCourseItem
              .slice(0, this.state.visiable)
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-3 col-md-4 col-sm-12 col-12 "
                  >
                    <CourseItems courseItem={item} />
                  </div>
                );
              })}
            <div className="col-md-12 text-center m-2 mb-5">
              {' '}
              {this.state.visiable < this.props.courseList.length && (
                <button onClick={this.loadMore} className=" xemThem">
                  Xem thêm
                </button>
              )}
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-2 col-md-2 col-sm-12">
              {' '}
              <Cinema />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              {' '}
              <CumRap />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <LichChieu />
            </div>
          </div>
          <div className="pt-5">
            {' '}
            <GirdMe />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourses());
    AOS.init({
      duration: 1000,
    });
  }
}
const mapStateToProps = (state) => ({
  courseList: state.CourseReducer.courses,
  bgChange: state.CourseReducer.check,
});

export default connect(mapStateToProps, null)(Home);
