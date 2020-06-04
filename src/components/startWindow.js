import React, { useState } from "react";
import Button from "./button";
// import classNames from "classnames";

import "./style/startWindow.css";
import GamePreparation from "./gamePreparation";
// import { PlayOrGoBack } from "../svgs";

const StartWindow = ({ onClose }) => {
  const [showGamePreparation, setShowGamePreparation] = useState(false);
  const PlayOrGoBack = () => {
    if (!showGamePreparation) {
      return (
        <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
          <polyline points="0, 10 110, 50 0, 90 0, 10" />
        </svg>
      );
    } else
      return (
        <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
          <polyline points="-25, 50 70, 15 70, 85  -25, 50" />
          <rect x="70" y="40" width="50" height="20"></rect>
        </svg>
      );
  };

  const toggleGamePreparation = () => {
    if (showGamePreparation === true) {
      setShowGamePreparation(false);
    } else {
      setShowGamePreparation(true);
    }
  };

  return (
    <div className="startWindow">
      <div className="startMenu">
        {/* <div className="closeBtn" onClick={onClose}>
          <div className="close">X</div>
        </div> */}
        {/* <div className="header">Scrabble</div> */}
        <div className="buttons">
          <Button svg={<PlayOrGoBack />} onClick={() => toggleGamePreparation()} />
          {/* <Button buttonText={"LeaderBoard"} onClick={() => console.log("LeaderBoard")} /> */}
        </div>
        {showGamePreparation && <GamePreparation onClose={onClose} />}
      </div>
    </div>
  );
};

export default StartWindow;
