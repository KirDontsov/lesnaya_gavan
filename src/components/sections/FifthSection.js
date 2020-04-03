import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Form from "../Form";
import Arrow from "../Arrow";

import "../../scss/sections/FifthSection.scss";

const FifthSection = () => {
  return (
    <Fragment>
      <div className="fifthSection" id="fifthSection">
        <Fade duration={2000}>
          <div className="centerSection">
            <div className="colWrapper">
              <div className="col">
                <h2 className="dark">
                  Имущественный комплекс - <br />
                  <span>
                    Ваш готовый <br /> бизнес
                  </span>
                </h2>
                <Arrow />
              </div>
              <div className="col">
                <Form type="sectionForm" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default FifthSection;
