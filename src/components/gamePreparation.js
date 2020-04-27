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
    { id: 6, name: "limegreen" },
  ]);
  const setColor = () => {
    let avalibleColors = colors.filter((color) => !color.picked);
    return avalibleColors[0];
  };
  const [selectedColor, setSelectedColor] = useState(setColor());
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
  const [playerName, setPlayerName] = useState("Player " + (players.length + 1));
  const playerNameRef = useRef();
  // let inputText = "player" + (players.length + 1);
  // export const findPlayers = () => {
  //   return players;
  // };
  const playButtonSvg = (
    <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
      <polyline points="0, 10 110, 50 0, 90 0, 10" />
    </svg>
  );
  const addButtonSvg = (
    <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="37" y="10" width="25" height="80"></rect>
      <rect x="10" y="40" width="80" height="25"></rect>
    </svg>
  );

  const colorClick = (color) => {
    if (color.picked) {
      return;
    }
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
    if (!/\S/.test(playerName)) {
      return console.log("Not valid name");
    }

    let id = players.length + 1;
    setPlayers([
      ...players,
      {
        id: id,
        name: playerName,
        color: playerColor.name,
        playerCells: [],
        points: 0,
      },
    ]);
    let col = newColors.find((color) => color === selectedColor);
    col.picked = true;
    setColors(newColors);

    setSelectedColor(setColor());
    setPlayerName("Player " + (players.length + 2));

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
          <input ref={playerNameRef} className="textInput" value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>
        </div>
        <div
          className={classNames("colorSelect", {
            nonSelected: !selectedColor && selectedColor === null,
          })}
        >
          {colors.map((color) => (
            <div
              key={color.id}
              className={classNames(color.name, {
                color: color && color !== null,
                selected: selectedColor && color === selectedColor,
                picked: color.picked && color.picked === true,
              })}
              onClick={() => colorClick(color)}
            >
              {" "}
            </div>
          ))}
        </div>
        <div className="AddPlayerBtn">
          <Button title="Add player" addButton={true} svg={addButtonSvg} onClick={() => addPlayer()} />
        </div>
      </div>
      <div className="players">
        <div className="playerTitle">players:</div>
        <div className="playerList">
          {players.map((player) => (
            <div
              key={player.id}
              className="player"
              style={{
                backgroundColor: player.color,
              }}
            >
              {player.name}
            </div>
          ))}
        </div>
      </div>
      <div className="startBtn">
        <Button title="Start game" startButton={true} svg={playButtonSvg} onClick={startGame} />
      </div>
    </div>
  );
};

export default GamePreparation;
