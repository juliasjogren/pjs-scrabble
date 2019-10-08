import React from "react";

import "./style/gameOver.css";

// const fakePlayers = [
//   {
//     name: "Player 2",
//     score: 9000000000,
//     bestWord: "COMPREHENSIONS"
//   },
//   {
//     name: "Player 1",
//     score: 278,
//     bestWord: "FUNCTOOLS"
//   },
//   {
//     name: "Player 3",
//     score: 74,
//     bestWord: "BOAT"
//   },
// ];

const GameOver = props => {
  console.log("props", props);
  let onClick = props.onClick;
  let players = props.players;
  console.log("players", players);
  let winner = players.shift();

  return (
    <div className="gameOver" onClick={onClick && onClick}>
      <div className="gameOverTitleContainer">
        <div className="gameOverTitle">And the WINNER is:</div>
      </div>
      <div className="winnerContainer">
        <div className="winner" key={winner.id}>
          <span>{winner.name}</span>
          <span>{winner.points}</span>
        </div>
      </div>
      <div className={"gameOverPlayers"}>
        {players.map(player => {
          return (
            <div className="gameOverPlayer" key={player.id}>
              <span>{player && player.name}</span>
              <span>{player && player.points}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameOver;
