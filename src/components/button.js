import React from "react";
import "./style/button.css";
import classNames from "classnames";

const button = props => {
  // console.log(props);
  let miniButton = props.miniButton;
  let playerRemove = props.playerRemove;
  let shufflebtnSelect = props.shufflebtnSelect;
  let buttonText = props.buttonText;
  let click = props.onClick;
  let disabled = props.disabled;
  return (
    <div
      className={classNames("buttonArea", {
        miniButton: miniButton && miniButton === true,
        playerRemove: playerRemove && playerRemove === true,
        disabled: disabled && disabled === true,
        shuffleActive: shufflebtnSelect && shufflebtnSelect === true
      })}
      onClick={click}
    >
      {<div className="btn">{buttonText}</div>}
    </div>
  );
};

export default button;
