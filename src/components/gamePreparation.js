import React, { useState, useRef } from "react";
import classNames from "classnames";
import Button from "./button";

import "./style/gamePreparation.css";

const GamePreparation = ({ onClose }) => {
  const [colors, setColors] = useState([
    { id: 1, name: "teal" },
    { id: 2, name: "purple" },
    { id: 3, name: "darkred" },
    { id: 4, name: "Crimson" },
    { id: 5, name: "yellow" },
    { id: 6, name: "limegreen" }
  ]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [players, setPlayers] = useState([
    // {
    //   id: 1,
    //   name: "Pontus",
    //   color: "lightblue",
    //   playerCells: [],
    //   points: 0
    // },
    // {
    //   id: 2,
    //   name: "Julia",
    //   color: "pink",
    //   playerCells: [],
    //   points: 0
    // },
    // {
    //   id: 3,
    //   name: "Belgarath",
    //   color: "green",
    //   playerCells: [],
    //   points: 0
    // }
  ]);
  const [playerName, setPlayerName] = useState("");
  const playerNameRef = useRef();
  // let inputText = "player" + (players.length + 1);
  // export const findPlayers = () => {
  //   return players;
  // };

  const colorClick = color => {
    // console.log("color", color.id, color);

    if (selectedColor && selectedColor.selected === true) {
      selectedColor.selected = false;
    }
    setColors(colors);
    setSelectedColor(color);
  };

  const addPlayer = () => {
    let newColors = [...colors];
    let playerColor = selectedColor;
    if (!playerColor) {
      return console.log("no color picked");
    }
    if (playerColor && playerColor.picked) {
      return console.log("color allready picked");
    }
    if (playerName === "") {
      return console.log("no name picked");
    }
    let id = players.length + 1;
    setPlayers([
      ...players,
      {
        id: id,
        name: playerName,
        color: playerColor.name,
        playerCells: [],
        points: 0
      }
    ]);

    let col = newColors.find(color => color === selectedColor);
    col.picked = true;
    setColors(newColors);

    setSelectedColor(null);
    setPlayerName("");

    playerNameRef.current.focus();
    // console.log("players", players);
  };

  // const startGame = () => {
  //   console.log("startgame");
  // };

  const startGame = () => {
    onClose(players);
  };

  return (
    <div className="gamePreparation">
      <div className="playerPreparation">
        <div className="playerNameInput">
          <input
            ref={playerNameRef}
            className="textInput"
            value={playerName}
            placeholder="Write player name here.."
            onChange={e => setPlayerName(e.target.value)}
          ></input>
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
        <div className="AddPlayerBtn">
          <Button buttonText={"Add player"} onClick={() => addPlayer()} />
        </div>
      </div>
      <div className="players">
        <div className="playerTitle">players:</div>
        <div className="playerList">
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
      <div className="startBtn">
        <Button buttonText={"Start game"} onClick={startGame} />
      </div>
    </div>
  );
};

export default GamePreparation;
