import React, { useState } from "react";

import StartWindow from "./startWindow";
import GameOver from "./gameOver.js";
import Board from "./board";

import "./style/gameWindow.css";

const GameWindow = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showGameOver, setShowGameOver] = useState(true);
  // const toggleShowMenu = () => setShowMenu(!showMenu);
  const startGame = () => {
    setShowMenu(false);
    // console.log(players);
  };

  const restartGame = () => {
    setShowGameOver(false);
    setShowMenu(true);
  };

  const reverseRestartGame = () => {
    setShowMenu(false);
    setShowGameOver(true);
  };

  return (
    <div className="gameWindow">
      <div
        className="game-header"
        style={{ cursor: "pointer" }}
        onClick={() => setShowMenu(true)}
      ></div>
<<<<<<< HEAD
      {showMenu && <StartWindow onClose={() => startGame()} />}
=======
      {showMenu && <StartWindow onClose={reverseRestartGame} />}
      {showGameOver && <GameOver onClick={restartGame} />}
>>>>>>> 8db10ef6998bbf49ab0f421fbcab30812a6df5ae
      <Board />
      <div className="game-footer"></div>
    </div>
  );
};

export default GameWindow;
