import React, { useState } from "react";
import Button from "./button";
// import classNames from "classnames";

import "./style/startWindow.css";
import GamePreparation from "./gamePreparation";

const StartWindow = ({ onClose }) => {
  const [showGamePreparation, setShowGamePreparation] = useState(true);

  return (
    <div className="startWindow">
      <div className="startMenu">
        {/* <div className="closeBtn" onClick={onClose}>
          <div className="close">X</div>
        </div> */}
        {/* <div className="header">Scrabble</div> */}
        <div className="buttons">
          <Button buttonText={"New game"} onClick={() => setShowGamePreparation(true)} />
          <Button buttonText={"LeaderBoard"} onClick={() => console.log("LeaderBoard")} />
        </div>
        {showGamePreparation && <GamePreparation onClose={onClose} />}
      </div>
    </div>
  );
};

export default StartWindow;
