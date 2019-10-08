import React from "react";
import "./style/button.css";
// import classNames from "classnames";

const button = props => {
  // console.log(props);
  let buttonText = props.buttonText;
  let click = props.onClick;
  return (
    <div className="buttonArea" onClick={click}>
      {<div className="btn">{buttonText}</div>}
    </div>
  );
};

export default button;
