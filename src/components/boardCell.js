import React from "react";

const BoardCell = ({ cell, onClick, children }) => {
  let bonus = cell.bonus;
  function BonusText(props) {
    let text = "";
    if (props.text === "twoL") {
      text = "2L";
    }
    if (props.text === "threeL") {
      text = "3L";
    }
    if (props.text === "twoW") {
      text = "2W";
    }
    if (props.text === "threeW") {
      text = "3W";
    }
    return <div>{text}</div>;
  }

  const Bonus = (props) => {
    if (!cell.tile) {
      if (props.bonus) {
        return <BonusText text={props.bonus} />;
      }
    }

    return null;
  };

  return (
    <div className={`cell ${cell.locked && "locked"} ${cell.clickable && "clickable"} ${cell.first && "first"} ${cell.bonus || " "}`} onClick={onClick}>
      <Bonus bonus={bonus} />
      {children}
    </div>
  );
};

export default BoardCell;
