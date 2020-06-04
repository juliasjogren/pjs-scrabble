import React, { useState, useEffect } from "react";
import BoardCell from "./boardCell";
import Button from "./button";
import ScoreBoard from "./scoreBoard";
import { setup, execute, shuffleTiles } from "../game";
import { moveTileToPlayerCells, cellClick, findCellsInRound, determineDirection, makeMainWord } from "../round";
import { findNeighbors, makeAllUnlockedCellsClickable } from "../utils";
import "./style/board.css";
import classNames from "classnames";

const ShuffleIcon = () => (
  <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
    <polyline points="0,35 0,25 30,25 30,10 60,30 30,50 30,35 " transform="translate(20, 0)"></polyline>
    <polyline points="0,35 0,25 30,25 30,10 60,30 30,50 30,35 " transform="rotate(180)translate(-75, -100)"></polyline>
  </svg>
);

const PlayButtonSvg = () => (
  <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
    <polyline points="10, 20 110, 60 10, 100 10, 20" transform="scale(0.9)" />
  </svg>
);

const ExitIcon = () => (
  <svg className="svg" viewBox="0 0 100 100" width="100%" height="100%">
    <rect x="0" y="10" width="15" height="80" transform="rotate(-40)translate(0, 20)"></rect>
    <rect x="0" y="10" width="15" height="80" transform="rotate(40)translate(60, -45)"></rect>
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
  const [shuffleActive, setShuffleActive] = useState(false);

  useEffect(() => {
    const { boardCells, activePlayer, players } = setup(inputPlayers);
    setBoardCells(boardCells);
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer);
    setPlayers(players);
  }, []);

  useEffect(() => {
    if (roundCells && roundCells.length) {
      CheckifValidWord();
    }
  }, [roundCells]);

  const CheckifValidWord = (clickedCell) => {
    if (shuffleActive) {
      setExecuteBtnDisabled(false);
    } else {
      let firstRound = checkIfFirstRound();
      if (firstRound === false) {
        checkForLockedCell();
      }
      checkIfRoundCellsConnected();
    }
  };
  const clickOnCell = (cell) => {
    if (cell.locked || cell.clickable === false) {
      return console.log("locked");
    }

    cellClick(cell, activeTile, boardCells, playerCells);
    setActiveTile(null);

    let newRoundCells = findCellsInRound(boardCells, cell);
    setRoundCells(newRoundCells);
    makeAllUnlockedCellsClickable(boardCells);
  };

  const playerCellClick = ({ tile }) => {
    if (!tile) {
      return console.log("empty player cell");
    }
    if (shuffleActive) {
      toggleTileShuffleSelected(tile);
      return;
    }
    if (tile) {
      setActiveTile(tile);
    }
  };

  const executeClick = () => {
    if (shuffleActive) {
      shuffle();
    }
    if (executeBtnDisabled === true || (!shuffleActive && roundCells.length === 0)) {
      return console.log("not valid word");
    }
    if (!shuffleActive) {
      let newBoardCells = execute(roundCells, onGameOver);
      if (!newBoardCells) {
        return;
      }
      setBoardCells(newBoardCells);
    }

    switchPlayer();
  };
  const checkIfFirstRound = () => {
    let lockedCells = boardCells.find((cell) => cell.locked);
    let firstGameCell = boardCells.find((cell) => cell.index === 112);
    let firstInRound = roundCells.includes(firstGameCell);
    if (!lockedCells) {
      if (firstInRound) {
        setExecuteBtnDisabled(false);
      } else setExecuteBtnDisabled(true);
      return true;
    }
    return false;
  };

  const checkForLockedCell = () => {
    let lockedRoundCells = roundCells.filter((cell) => cell.locked);
    if (lockedRoundCells && lockedRoundCells.length > 0) {
      setExecuteBtnDisabled(false);
    } else setExecuteBtnDisabled(true);
  };

  const checkIfRoundCellsConnected = () => {
    const direction = determineDirection();
    if (direction === "no") return;

    const mainWord = makeMainWord(roundCells, direction);
    const sortedMainWord = mainWord.sort((a, b) => a.index - b.index);

    for (let i = 0; i < sortedMainWord.length; i++) {
      const cell = sortedMainWord[i];
      const nextCellInList = sortedMainWord[i + 1];
      if (!nextCellInList) continue;
      const nextPosition = direction === "horizontal" ? 1 : 15;
      const nextCellInListIsAdjacent = cell.index + nextPosition === nextCellInList.index;

      if (!nextCellInListIsAdjacent) {
        return setExecuteBtnDisabled(true);
      }
    }

    return setExecuteBtnDisabled(false);
  };

  const changeShuffleTilesActive = () => {
    if (shuffleActive === true) {
      setShuffleActive(false);
    } else {
      setShuffleActive(true);
    }
    setExecuteBtnDisabled(false);
  };
  const toggleTileShuffleSelected = (tile) => {
    tile.shuffleSelected = !tile.shuffleSelected;
    setPlayerCells([...playerCells]);
  };

  const switchPlayer = () => {
    const { activePlayer } = setup();
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer);
    setToggle("Show");
    setShowPlayerTiles(false);
    setShuffleActive(false);
    setRoundCells([]);
    setExecuteBtnDisabled(false);
  };

  const shuffle = () => {
    let activeCells = roundCells.filter((cell) => !cell.locked);
    if (activeCells.length > 0) {
      return console.log("Cant shuffle with tiles on board");
    }
    shuffleTiles(playerCells);
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

  const exitGame = () => {
    let result = confirm("Are you sure that you want to end this game");
    console.log(result);
    if (result == true) {
      let sortedPlayers = players.sort((a, b) => b.points - a.points);
      onGameOver(sortedPlayers);
    } else return;
  };

  return (
    <div className="board">
      <div className="stuffLeftOfCell">
        <ScoreBoard players={players} />
      </div>
      <div className="cells">
        {boardCells.map((cell) => (
          <BoardCell cell={cell} key={cell.index} onClick={() => clickOnCell(cell)}>
            {cell.tile && (
              <div
                className="tile"
                style={{
                  backgroundColor: cell.tile.color,
                }}
              >
                <div className="tileLetter">{cell.tile.letter}</div>
                <div className="tilePoints">{cell.tile.points}</div>
              </div>
            )}
          </BoardCell>
        ))}
      </div>
      <div className="bottom">
        <Button className="shuffleBtn" shufflebtnSelect={shuffleActive} svg={<ShuffleIcon />} miniButton={true} onClick={changeShuffleTilesActive} />
        <div className="playerCells">
          <div className="toggleBtn" onClick={() => toggleLetters()}>
            {toggle}
          </div>
          {playerCells.map((playerCell) => (
            <div className="playerCell" key={playerCell.index} onClick={() => playerCellClick(playerCell)}>
              {playerCell.tile && showPlayerTiles && (
                <div
                  className={classNames("tile", {
                    ["shuffleSelected"]: shuffleActive === true && playerCell.tile.shuffleSelected === true,
                    activeTile: activeTile && playerCell.tile === activeTile,
                  })}
                >
                  <div className="playerTileLetter">{playerCell.tile.letter}</div>
                  <div className="tilePoints">{playerCell.tile.points}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Button svg={<PlayButtonSvg />} disabled={executeBtnDisabled} miniButton={true} onClick={() => executeClick()} />
      </div>
      <div className="stuffRightOfCell">
        <Button className="button" svg={<ExitIcon />} miniButton={true} onClick={() => exitGame()} />
      </div>
    </div>
  );
};

export default Board;
