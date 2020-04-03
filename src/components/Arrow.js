import React, { Fragment } from "react";
import "../scss/components/Arrow.scss";

const Arrow = props => {
  return (
    <Fragment>
      {props.type !== undefined && props.type === "secondSection" ? (
        <a href="#secondSection">
          <div className="arrow-container vertical">
            <div
              className={props.color === "green" ? "arrow green" : "arrow"}
            />
          </div>
        </a>
      ) : (
        <div className="arrow-container vertical">
          <div className={props.color === "green" ? "arrow green" : "arrow"} />
        </div>
      )}
    </Fragment>
  );
};

export default Arrow;
