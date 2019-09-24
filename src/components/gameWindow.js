import React, { useState } from "react";

import StartWindow from "./startWindow";
import Board from "./board";

import "./style/gameWindow.css";

const GameWindow = () => {
  const [showMenu, setShowMenu] = useState(true);
  // const toggleShowMenu = () => setShowMenu(!showMenu);

  return (
    <div className="gameWindow">
      <div
        className="game-header"
        style={{ cursor: "pointer" }}
        onClick={() => setShowMenu(true)}
      ></div>
      {showMenu && <StartWindow onClose={() => setShowMenu(false)} />}
      <Board />
      <div className="game-footer"></div>
    </div>
  );
};

export default GameWindow;
