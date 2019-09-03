import React, { useState, useEffect } from "react";
import BoardCell from "./boardCell";
import { setup, execute } from "../game";
import { moveTileToPlayerCells, cellClick } from "../round";
import "./style/board.css";

const Board = () => {
  console.log("in board");
  const [boardCells, setBoardCells] = useState([]);
  const [playerCells, setPlayerCells] = useState([]);
  const [activePlayer, setActivePlayer] = useState(null);
  const [activeTile, setActiveTile] = useState(null);

  useEffect(() => {
    const { boardCells, activePlayer } = setup();
    setBoardCells(boardCells);
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer.id);
  }, []);

  const clickOnCell = cell => {
    cellClick(cell, activeTile, boardCells, playerCells);
    setActiveTile(null);
  };

  const playerCellClick = ({ tile }) => {
    if (activeTile) {
      moveTileToPlayerCells(activeTile, boardCells, playerCells);
      setActiveTile(null);
    }
    if (tile) {
      setActiveTile(tile);
    }
  };

  const executeClick = () => {
    execute();
    const { boardCells, activePlayer } = setup();
    setBoardCells(boardCells);
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer.id);
    // setActiveTile(null);
  };

  return (
    <div className="board">
      <div className="cells">
        {boardCells.map(cell => (
          <BoardCell cell={cell} key={cell.index} onClick={() => clickOnCell(cell)}>
            {cell.tile && (
              <div className="tile">
                <div className="tileLetter">{cell.tile.letter}</div>
                <div className="tilePoints">{cell.tile.points}</div>
              </div>
            )}
          </BoardCell>
        ))}
      </div>

      <div className="playerCells">
        {playerCells.map(playerCell => (
          <div
            // className={classNames("playerCell", { active: isPlayerCellActive(playerCell) })}
            key={playerCell.index}
            onClick={() => playerCellClick(playerCell)}
          >
            {playerCell.tile && <div className="tile">{playerCell.tile.letter}</div>}
          </div>
        ))}
      </div>
      <div className="stuff">
        <div className="activeTiles">
          <p>Active Tile</p>
          <p>{activeTile && activeTile.letter}</p>
          <p />
          <p>Points</p>
          {/* <p>{executePoints()}</p> */}
        </div>
        {activePlayer && <div className="activePlayer">Active player {activePlayer}</div>}
        <div className="executeButton" onClick={executeClick}>
          <span>EXECUTE</span>
        </div>
        {/* <div className="shuffleButton" onClick={console.log("shuffle")}>
          <span>SHUFFLE</span>
        </div> */}
      </div>
    </div>
  );
};

export default Board;
