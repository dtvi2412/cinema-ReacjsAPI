import React, { Component } from "react";
import { connect } from "react-redux";
class BanChon extends Component {
  renderBanChon = () => {
    const { banChon } = this.props;
    if (banChon === 1) {
      return <img src="/Images/keo.png" width={70} />;
    }
    if (banChon === 2) {
      return <img src="/Images/bua.png" width={70} />;
    }
    if (banChon === 3) {
      return <img src="/Images/bao.png" width={70} />;
    }
  };
  render() {
    return <div>{this.renderBanChon()}</div>;
  }
}
const mapStateToProps = (state) => ({
  banChon: state.GameXuXiReducer.banChon,
});
export default connect(mapStateToProps)(BanChon);
