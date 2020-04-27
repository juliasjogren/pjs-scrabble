import React from "react";

const BoardCell = ({ cell, onClick, children }) => (
  <div
    className={`cell ${cell.locked && "locked"} ${cell.clickable && "clickable"}`}
    onClick={onClick}
  >
    {children}
  </div>
);

export default BoardCell;
