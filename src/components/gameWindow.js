import React, { useState } from "react";

import StartWindow from "./startWindow";
import GameOver from "./gameOver.js";
import Board from "./board";

import "./style/gameWindow.css";
const GameWindow = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showGameOver, setShowGameOver] = useState(false);
  const [gameStart, setGameStart] = useState(false); // const toggleShowMenu = () => setShowMenu(!showMenu);
  const [players, setPlayers] = useState([]);

  const endGame = players => {
    console.log("GameWindow endGame players", players);
    setPlayers(players);
    setGameStart(false);
    setShowGameOver(true);
  };

  const gameStarter = players => {
    setPlayers(players);
    setShowMenu(false);
    setGameStart(true);
  };

  const restartGame = () => {
    setShowGameOver(false);
    setShowMenu(true);
  };

  // console.log("GameWindow render", players);
  // console.log("gameStart", gameStart);

  return (
    <div className="gameWindow">
      <div
        className="game-header"
        style={{ cursor: "pointer" }}
        onClick={() => setShowMenu(true)}
      ></div>
      {showMenu && <StartWindow onClose={gameStarter} />}
      {showGameOver && <GameOver onClick={restartGame} players={players} />}
      {gameStart && <Board players={players} onGameOver={endGame} />}
      {/* <Board players={players} /> */}
      <div className="game-footer"></div>
    </div>
  );
};

export default GameWindow;
