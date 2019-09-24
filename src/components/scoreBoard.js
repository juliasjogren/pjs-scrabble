import React from "react";
import "./style/scoreBoard.css";
import classNames from "classnames";

const scoreBoard = ({ players }) => {
  let active = players.find(player => player.active === true);
  // console.log("active", active && active.id);

  return (
    <div className="scoreBoard">
      {players.map(player => {
        return (
          <div
            className={classNames("playerInfo", {
              active: player.id === active.id
            })}
            key={player.id}
          >
            <div className="playerName">{player.name}</div>
            <div className="playerPoints">Points: {player.points} </div>
          </div>
        );
      })}
    </div>
  );
};

export default scoreBoard;
