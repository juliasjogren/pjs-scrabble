import React from "react";

import "./style/gameOver.css";

const fakePlayers = [
  {
    name: "Player 2",
    score: 9000000000,
    bestWord: "COMPREHENSIONS"
  },
  {
    name: "Player 1",
    score: 278,
    bestWord: "FUNCTOOLS"
  },
  {
    name: "Player 3",
    score: 74,
    bestWord: "BOAT"
  },
];

const GameOver = ({ onClick }) => (
  <div
    className="gameOver"
    onClick={onClick && onClick}
  >
    <div className="gameOverTitleContainer">
      <div className="gameOverTitle">
        Win!
      </div>
    </div>
    <div className={"gameOverPlayers"}>
      {fakePlayers.map(({name, score, bestWord}) => (
        <div className="gameOverPlayer">
          <span>{name}</span>
          <span>{score}</span>
          <span>{bestWord}</span>
        </div>
      ))}
    </div>
  </div>
);

export default GameOver;

