import React from "react";

import Board from "./board";
import { createBag } from "../utils";

import "./style/game.css";

const Game = () => {
  React.useEffect(() => {
    // console.log("game mount");
  }, []);

  const bag = createBag();

  return (
    <div className="game">
      <div className="game-header">
        <span>Welcome to Scrabble</span>
      </div>
      <Board startingBag={bag} />
    </div>
  );
};

export default Game;
