import React, { useState, useRef } from "react";
import classNames from "classnames";
import Button from "./button";

import "./style/gamePreparation.css";
const ExitIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
  </svg>
);

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

  const removePlayer = player => {
    let newPlayers = players.filter(pl => pl.id !== player.id);
    console.log("newPlayers", newPlayers);
    let c = player.color;
    console.log("c", c);
    let co = colors.find(color => color.name === c);
    console.log("co", co);
    co.picked = false;
    setColors(colors);
    setPlayers(newPlayers);
  };

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
              <Button
                className="button"
                buttonText={<ExitIcon />}
                playerRemove={true}
                onClick={() => removePlayer(player)}
              />
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
