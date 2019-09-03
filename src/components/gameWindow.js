import React from "react";

import testBoard from "./testBoard";
import Board from "./board";
import { createBag } from "../utils";

import "./style/game.css";

const GameWindow = () => {
  React.useEffect(() => {
    // console.log("game mount");
  }, []);

  return (
    <div className="game">
      <div className="game-header">
        <span>Welcome to Scrabble</span>
      </div>
      {/* <testBoard startingBag={bag} /> */}
      <Board />
    </div>
  );
};

export default GameWindow;
