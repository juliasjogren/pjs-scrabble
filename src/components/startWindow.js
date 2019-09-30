import React, { useState } from "react";
// import classNames from "classnames";

import "./style/startWindow.css";
import GamePreparation from "./gamePreparation";

const StartWindow = ({ onClose }) => {
  const [showGamePreparation, setShowGamePreparation] = useState(false);
  // let gamePreparationVisible = false;

  return (
    <div className="startWindow">
      <div className="startMenu">
        <div className="closeBtn" onClick={onClose}>
          <div className="close">X</div>
        </div>
        <div className="header">Scrabble</div>
        <div className="startBtn" onClick={() => setShowGamePreparation(true)}>
          <div className="start">Start new game</div>
        </div>
        <div className="leaderBoardBtn" onClick={() => console.log("LeaderBoard")}>
          <div className="leaderBoard">Leaderboard</div>
        </div>
        {showGamePreparation && <GamePreparation onClose={onClose} />}
      </div>
    </div>
  );
};

export default StartWindow;
