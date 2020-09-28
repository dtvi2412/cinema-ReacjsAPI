import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
class GirdMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModel: false,
    };
  }
  toggleModel = () => {
    this.setState({
      isOpenModel: !this.state.isOpenModel,
    });
  };
  renderDanhGia = () => {
    return this.props.courseItemDanhGia
      .filter((item) => item.danhGia > 5)
      .slice(0, 4)
      .map((item1, index) => {
        return (
          <div className={`item${index + 1} itemChung`} key={index}>
            <img src={item1.hinhAnh} />
            <div className="con">
              {" "}
              <span>{item1.danhGia}</span>
              <h1>{item1.tenPhim}</h1>
              <h5 className="ngayKhoiChieu">
                Ngày khởi chiếu:{" "}
                {new Date(item1.ngayKhoiChieu).toLocaleDateString()}
              </h5>
              <Button onClick={this.toggleModel.bind(this)}> Xem phim</Button>{" "}
              <Modal isOpen={this.state.isOpenModel}>
                <ModalHeader
                  toggle={this.toggleModel.bind(this)}
                  className="modalHeader"
                >
                  {item1.tenPhim}
                </ModalHeader>
                <ModalBody className="modalBody">
                  {" "}
                  <iframe
                    className="p-5 bg-dark"
                    width="100%"
                    height="100%"
                    src={item1.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </ModalBody>
                <ModalFooter className="modalFooter">
                  {" "}
                  Ngày khởi chiếu:{" "}
                  {new Date(item1.ngayKhoiChieu).toLocaleDateString()}
                </ModalFooter>
              </Modal>
            </div>
          </div>
        );
      });
  };
  render() {
    return (
      <div className="girdMe">
        {" "}
        {this.renderDanhGia()}
        {/* <div className="item1"></div>
        <div className="item2"></div>
        <div className="item3"></div>
        <div className="item4"></div> */}{" "}
        {/* Modal */}
        {/* modal */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  courseItemDanhGia: state.CourseReducer.courses,
});
export default connect(mapStateToProps, null)(GirdMe);
