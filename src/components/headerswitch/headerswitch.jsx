import React from "react";
import "./headerswitch.scss";

import { BsFileEarmarkArrowDown } from "react-icons/bs";

const HeaderSwitch = () => {
  return (
    <header>
      {/* <div className="container header__container">hello</div> */}
      <div className="cta">
        <a href="#contact" download className="btn">
          <BsFileEarmarkArrowDown /> Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </header>
  );
};

export default HeaderSwitch;
