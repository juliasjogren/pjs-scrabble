import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import "./style/gamePreparation.css";

const GamePreparation = () => {
  const [colors, setColors] = useState([
    { id: 1, name: "blue" },
    { id: 2, name: "purple" },
    { id: 3, name: "red" },
    { id: 4, name: "pink" },
    { id: 5, name: "yellow" },
    { id: 6, name: "green" }
  ]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const playerNameRef = useRef();

  const colorClick = color => {
    console.log("color", color.id, color);

    if (selectedColor && selectedColor.selected === true) {
      selectedColor.selected = false;
    }
    color.selected = true;
    setColors(colors);
    setSelectedColor(color);
  };

  const addPlayer = () => {
    // let playerName = document.getElementById("playerName").value;
    // document.getElementById("playerName").value = "";
    let playerColor = selectedColor;
    console.log("playerClick", playerName);
    console.log("player color", playerColor);
    let id = players.length + 1;
    console.log(id);

    setPlayers([...players, { id: id, name: playerName, color: playerColor.name }]);
    setSelectedColor(null);
    setPlayerName("");
    playerNameRef.current.focus();
    console.log("players", players);
  };

  return (
    <div className="gamePreparation">
      <div className="playerPreparation">
        <div className="playerNameInput">
          <div className="name">
            <span>Name: </span>
            <input
              ref={playerNameRef}
              className="textInput"
              value={playerName}
              onChange={e => setPlayerName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="colorSelect">
          {colors.map(color => (
            <div
              key={color.id}
              className={classNames(color.name, {
                selected: selectedColor && color === selectedColor
              })}
              onClick={() => colorClick(color)}
            >
              {" "}
            </div>
          ))}
        </div>
        <div className="addPlayerBtn" onClick={() => addPlayer()}>
          <div className="pBtn">Add Player</div>
        </div>
      </div>
      <div className="players">
        {players.map(player => (
          <div
            key={player.id}
            className="player"
            style={{
              backgroundColor: player.color
            }}
          >
            {player.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePreparation;
