import React from "react";
import { Link } from "react-router-dom";
import "../scss/components/Arrow.scss";

const Arrow = props => {
  const scrollToTop = () => {
    let div = document.querySelector(".wrapper");
    div.scrollTop = 0;
  };
  return (
    <Link to={props.to}>
      <div onClick={() => scrollToTop()}>
        {props.title ? <h2 className="titleArrow">{props.title}</h2> : null}
        <div className="arrow-container horizontal">
          <div className="arrow" />
        </div>
      </div>
    </Link>
  );
};

export default Arrow;
