import React from "react";
import "./style/button.css";
import classNames from "classnames";

const button = (props) => {
  // console.log(props);
  let miniButton = props.miniButton;
  let addButton = props.addButton;
  let startButton = props.startButton;
  let hover = true;
  let svg = props.svg;
  let shufflebtnSelect = props.shufflebtnSelect;
  let buttonText = props.buttonText;
  let click = props.onClick;
  let disabled = props.disabled;
  return (
    <div
      className={classNames("buttonArea", {
        miniButton: miniButton && miniButton === true,
        hvr: hover && hover === true,
        disabled: disabled && disabled === true,
        shuffleActive: shufflebtnSelect && shufflebtnSelect === true,
      })}
      onClick={click}
    >
      {
        <div
          className={classNames("btn", {
            hvr: hover && hover === true,
          })}
        >
          {svg}
        </div>
      }
    </div>
  );
};

export default button;
