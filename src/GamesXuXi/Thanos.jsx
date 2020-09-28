import React, { Component } from "react";
import thanos from "./../Asset/Images/thanos1.png";
import { connect } from "react-redux";
class Thanos extends Component {
  renderBotChon = () => {
    const { botChon } = this.props;
    if (botChon === 1) {
      return (
        <img
          style={{
            position: "absolute",
            left: "10%",
            animation: `randomItem${Date.now()} 0.5s`,
          }}
          src="/Images/keo.png"
          width={80}
        />
      );
    }
    if (botChon === 2) {
      return (
        <img
          style={{
            position: "absolute",
            left: "10%",
            animation: `randomItem${Date.now()} 0.5s`,
          }}
          src="/Images/keo.png"
          width={80}
          src="/Images/bua.png"
          width={80}
        />
      );
    }
    if (botChon === 3) {
      return (
        <img
          style={{
            position: "absolute",
            left: "10%",
            animation: `randomItem${Date.now()} 0.5s`,
          }}
          src="/Images/keo.png"
          width={80}
          src="/Images/bao.png"
          width={80}
        />
      );
    }
  };
  render() {
    let keyFrame = `@keyframes randomItem${Date.now()} {
      0% {top:-50px;}
      25% {top:100px;}
      50% {top:-50px;}
      75% {top:100px;}
      100% {top:0;}
    }`;
    return (
      <div>
        <style>{keyFrame}</style>
        <div className style={{ position: "relative" }}>
          {this.renderBotChon()}
        </div>
        <img className="mt-2" src={thanos} width={100 + "%"} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  botChon: state.GameXuXiReducer.botChon,
});
export default connect(mapStateToProps)(Thanos);
