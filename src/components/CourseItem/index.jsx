import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CourseItem/styles.scss";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { FaCentercode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-bootstrap/Carousel";
class CourseItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModel: false,
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }
  toggleModel = () => {
    this.setState({
      isOpenModel: !this.state.isOpenModel,
    });
  };
  render() {
    const { courseItem } = this.props;
    return (
      <div className="display-4">
        {" "}
        <div class="card cardMe mb-5 text-left" data-aos="fade-up">
          <div className="parentTrailer" style={{ position: "relative" }}>
            {" "}
            <img
              src={courseItem.hinhAnh}
              style={{ width: "100%", height: 400 }}
            />{" "}
            <div className="full"></div>{" "}
            <div
              className="trailer"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              {" "}
              <span className="">
                {/* Modal */}
                <Button
                  className="anXem"
                  color=""
                  onClick={this.toggleModel.bind(this)}
                >
                  <FaCentercode style={{ fontSize: "40px" }} />
                </Button>
                <Modal isOpen={this.state.isOpenModel}>
                  <ModalHeader toggle={this.toggleModel.bind(this)}>
                    Header
                  </ModalHeader>
                  <ModalBody>
                    {" "}
                    <iframe
                      className="p-5 bg-dark"
                      width="100%"
                      height="100%"
                      src={courseItem.trailer}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </ModalBody>
                  <ModalFooter>FOOTER</ModalFooter>
                </Modal>
                {/* modal */}
              </span>
            </div>
          </div>
          <div class="card-body">
            {" "}
            <h4 class="card-title">
              {courseItem.tenPhim.length > 15
                ? courseItem.tenPhim.substr(0, [15]) + "..."
                : courseItem.tenPhim}{" "}
            </h4>
            <h6>{courseItem.moTa.substr(0, [20])} ...</h6>
            <Link
              className={`btn muaVe `}
              to={`/detail/${this.props.courseItem.maPhim}`}
            >
              Mua vé
            </Link>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default CourseItems;
