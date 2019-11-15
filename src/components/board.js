import React, { useState, useEffect } from "react";
import BoardCell from "./boardCell";
import Button from "./button";
import ScoreBoard from "./scoreBoard";
// import ActivePlayerInfo from "./activePlayerInfo";
import { setup, execute, shuffleTiles } from "../game";
import {
  moveTileToPlayerCells,
  cellClick,
  findCellsInRound,
  determineDirection,
  makeMainWord
} from "../round";
import { findNeighbors, makeAllUnlockedCellsClickable } from "../utils";
import "./style/board.css";
import classNames from "classnames";

const ShuffleIcon = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
  >
    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm2.085 14h-9v2h9v3l5-4-5-4v3zm-4-6v-3l-5 4 5 4v-3h9v-2h-9z" />
  </svg>
);
const ExecuteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M3 22v-20l18 10-18 10z" />
  </svg>
);

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

const Board = ({ players: inputPlayers, onGameOver }) => {
  const [boardCells, setBoardCells] = useState([]);
  const [playerCells, setPlayerCells] = useState([]);
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState(null);
  const [activeTile, setActiveTile] = useState(null);
  const [roundCells, setRoundCells] = useState([]);
  const [showPlayerTiles, setShowPlayerTiles] = useState(false);
  const [toggle, setToggle] = useState("show");
  const [executeBtnDisabled, setExecuteBtnDisabled] = useState(false);
  const [shuffleTilesActive, setShuffleTilesActive] = useState(false);
  // const [clickedCell, setClickedCell] = useState(null);

  useEffect(() => {
    console.log("Board mount", inputPlayers);
    const { boardCells, activePlayer, players } = setup(inputPlayers);
    setBoardCells(boardCells);
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer);
    setPlayers(players);
  }, []);

  const clickOnCell = cell => {
    if (cell.locked || cell.clickable === false) {
      return console.log("You cant click on this cell");
    }
    console.log("First", executeBtnDisabled);
    cellClick(cell, activeTile, boardCells, playerCells);
    setActiveTile(null);
    let newRoundCells = findCellsInRound(boardCells, cell);
    let filterdRoundCells = newRoundCells.filter(cell => cell.tile);
    setRoundCells(filterdRoundCells);
    // CheckifValidWord(cell);
    makeAllUnlockedCellsClickable(boardCells);
    // console.log("round cells in clicked cells", roundCells);
  };

  useEffect(() => {
    if (roundCells && roundCells.length) {
      CheckifValidWord();
    }
  }, [roundCells]);

  const CheckifValidWord = clickedCell => {
    let direction = determineDirection();
    let mainWord = makeMainWord(roundCells, direction);
    let cellInLine = [];

    for (let i = 0; i < mainWord.length; i++) {
      let cell = mainWord[i];
      let lastCell = mainWord[mainWord.length - 1];
      let velocity = 0;

      let firstGameCell = boardCells.find(cell => cell.index === 112);
      let lockedRoundCells = roundCells.filter(cell => cell.locked);
      let firstInRound = roundCells.includes(firstGameCell);
      let noLockedcellsInRound = lockedRoundCells.length < 1;

      // console.log("first in rouuund", firstInRound);
      // if(roundCells.includes(firstGameCell) ||)

      if (noLockedcellsInRound) {
        if (firstInRound === false) {
          return setExecuteBtnDisabled(true);
        }
      }

      if (direction === "horizontal") {
        velocity = 1;
      }
      if (direction === "vertical") {
        velocity = 15;
      }
      if (direction === "no") {
        console.log("only one tile");
      }
      let nextCell = mainWord[i + 1];

      if (nextCell && cell.index + velocity === nextCell.index) {
        cellInLine.push(cell);
      }

      if (cell === lastCell) {
        console.log("hello");
        cellInLine.push(cell);
      }
    }

    // console.log("same length", cellInLine.length === mainWord.length);
    // const sameLength = cellInLine.length === mainWord.length;
    // setExecuteBtnDisabled(sameLength);
    if (cellInLine.length === mainWord.length) {
      setExecuteBtnDisabled(false);
    } else {
      setExecuteBtnDisabled(true);
    }
  };

  const changeShuffleTilesActive = () => {
    if (shuffleTilesActive === true) {
      setShuffleTilesActive(false);
    } else {
      setShuffleTilesActive(true);
    }
  };
  const toggleTileShuffleSelected = tile => {
    tile.shuffleSelected = !tile.shuffleSelected;
    setPlayerCells([...playerCells]);
  };

  const playerCellClick = ({ tile }) => {
    if (!tile) {
      return console.log("empty player cell");
    }
    if (shuffleTilesActive) {
      toggleTileShuffleSelected(tile);
      return;
    }
    if (activeTile) {
      moveTileToPlayerCells(activeTile, boardCells, playerCells);
      setActiveTile(null);
    }
    if (tile) {
      setActiveTile(tile);
    }
  };

  const executeClick = () => {
    if (shuffleTilesActive === true) {
      let activeCells = roundCells.filter(cell => !cell.locked);
      let aC = activeCells.length === 0;

      if (aC === false) {
        return console.log("Cant shuffle with tiles on board");
      }
      shuffleTiles(playerCells);
      // fulfix för omrendering
      // setBoardCells([...boardCells]);
      const { activePlayer } = setup();
      setPlayerCells(activePlayer.playerCells);
      setActivePlayer(activePlayer);
      setShuffleTilesActive(false);
    }
    if (executeBtnDisabled === true) {
      return console.log("not valid word");
    }
    if (roundCells.length === 0) {
      return console.log("Enter a Word");
    }

    let newBoardCells = [];
    // console.log("roundcell", roundCells);
    if (shuffleTilesActive == false) {
      newBoardCells = execute(roundCells, onGameOver);
    } else {
      newBoardCells = boardCells;
    }
    const { activePlayer } = setup();

    setToggle("Show");
    setShowPlayerTiles(false);
    setBoardCells(newBoardCells);
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer);
    setRoundCells([]);
    setExecuteBtnDisabled(false);
  };

  const toggleLetters = () => {
    if (showPlayerTiles) {
      setShowPlayerTiles(false);
      setToggle("Show");
    } else {
      setShowPlayerTiles(true);
      setToggle("Hide");
    }
  };

  return (
    <div className="board">
      <div className="stuffLeftOfCell">
        <ScoreBoard players={players} />
        {/* <Button className="shuffleBtn" buttonText={<ShuffleIcon />} /> */}
      </div>
      <div className="cells">
        {boardCells.map(cell => (
          <BoardCell
            cell={cell}
            key={cell.index}
            onClick={() => clickOnCell(cell)}
          >
            {cell.tile && (
              <div
                className="tile"
                style={{
                  backgroundColor: cell.tile.color
                }}
              >
                <div className="tileLetter">{cell.tile.letter}</div>
                <div></div>
                <div className="tilePoints">{cell.tile.points}</div>
              </div>
            )}
          </BoardCell>
        ))}
      </div>
      <div className="bottom">
        <Button
          className="shuffleBtn"
          shufflebtnSelect={shuffleTilesActive}
          buttonText={<ShuffleIcon />}
          miniButton={true}
          onClick={changeShuffleTilesActive}
        />
        <div className="playerCells">
          <div className="toggleBtn" onClick={() => toggleLetters()}>
            {toggle}
          </div>
          {playerCells.map(playerCell => (
            <div
              className="playerCell"
              // className={classNames("playerCell", { active: isPlayerCellActive(playerCell) })}
              key={playerCell.index}
              onClick={() => playerCellClick(playerCell)}
            >
              {playerCell.tile && showPlayerTiles && (
                <div
                  className={classNames("tile", {
                    ["shuffleSelected"]:
                      playerCell.tile.shuffleSelected &&
                      playerCell.tile.shuffleSelected === true
                  })}
                >
                  {playerCell.tile.letter}
                </div>
              )}
            </div>
          ))}
        </div>
        <Button
          buttonText={<ExecuteIcon />}
          disabled={executeBtnDisabled}
          miniButton={true}
          onClick={executeClick}
        />
      </div>
      <div className="stuffRightOfCell">
        <Button
          className="button"
          buttonText={<ExitIcon />}
          miniButton={true}
          onClick={() => console.log("Exit")}
        />
      </div>
    </div>
  );
};

export default Board;
