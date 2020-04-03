import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Form from "../components/Form";
import { connect } from "react-redux";

import "../scss/CallBack__mob.scss";

const Button = props => (
  <button className={classNames(props.className)} onClick={props.onClick}>
    {props.children}
  </button>
);

class CallBack extends Component {
  openModal() {
    this.props.changeClass(!this.props.addClass);
    this.props.changeActive(!this.props.active);
  }

  closeModal() {
    this.props.changeClass(!this.props.addClass);
    this.props.changeActive(!this.props.active);
  }

  render() {
    let buttonClass = ["callBack"];
    let navClass = ["nav__toggle mob"];
    let header = ["header__form"];

    if (this.props.addClass) {
      buttonClass.push("active");
      navClass.push("active");
    }
    return (
      <Fragment>
        <div className={navClass.join(" ")}></div>
      </Fragment>
    );
  }
}

const mapState = state => ({
  addClass: state.callBack.addClass,
  active: state.callBack.active
});

const mapDispatch = ({ callBack: { changeClass, changeActive } }) => ({
  changeClass,
  changeActive
});

export default connect(mapState, mapDispatch)(CallBack);
