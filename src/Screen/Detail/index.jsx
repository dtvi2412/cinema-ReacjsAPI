import React, { Component, Suspense, lazy } from "react";

import { connect } from "react-redux";

import { fetchCourseDetail } from "../../Redux/Action/course";
import { createAction } from "../../Redux/Action";
import { DESTROY } from "../../Redux/Action/type";
import "./style.scss";
import LoadingComponent from "../../components/Loading";
const Card = lazy(() => import("../../components/Card/index"));

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  onLoading = () => {
    if (this.props.courseDetail === null) {
      this.setState({
        loading: true,
      });
    } else this.setState({ loading: false });
  };
  render() {
    const { courseDetail } = this.props;
    return (
      <>
        {this.state.loading ? (
          <>
            {" "}
            <div
              className="container backgroundImage"
              style={{
                backgroundImage: `url(${courseDetail.hinhAnh})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
                lineHeight: "100%",
              }}
            >
              {" "}
              <div className="row">
                <div>
                  {" "}
                  <Suspense
                    fallback={
                      this.props.courseDetail !== null ? (
                        <Card />
                      ) : (
                        <LoadingComponent />
                      )
                    }
                  >
                    <Card courseDetail={courseDetail} />
                  </Suspense>
                </div>
              </div>
            </div>
          </>
        ) : (
          <LoadingComponent />
        )}
      </>
    );
  }
  componentDidUpdate() {
    console.log(this.state.loading);
    if (this.state.loading === false) {
      this.setState({
        loading: true,
      });
    }
  }
  componentDidMount() {
    this.state.loading = true;

    console.log(this.state.loading);
    this.props.dispatch(fetchCourseDetail(this.props.match.params.courseID));

    this.onLoading();
  }
  componentWillUnmount() {
    // this.props.dispatch({
    //   type: "destroy",
    //   payload: null,
    // });
    this.props.dispatch(createAction(DESTROY, null));
  }
}
const mapStateToProps = (state) => {
  return {
    courseDetail: state.CourseReducer.courseDetail || {
      tenPhim: "",
      hinhAnh: "",
      moTa: "",
    },
  };
};

export default connect(mapStateToProps, null)(CourseDetail);
