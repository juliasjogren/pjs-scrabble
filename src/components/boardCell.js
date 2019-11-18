import React from "react";

const BoardCell = ({ cell, onClick, children }) => {
  let firstCell = null;
  if (cell.index === 112) {
    firstCell = cell;
  }
  return (
    <div
      className={`cell ${cell.locked && "locked"} ${firstCell && "clickable"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BoardCell;
