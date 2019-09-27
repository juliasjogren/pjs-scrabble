import React, { useState, useEffect } from "react";
import BoardCell from "./boardCell";
import ScoreBoard from "./scoreBoard";
import ActivePlayerInfo from "./activePlayerInfo";
import { setup, execute } from "../game";
import { moveTileToPlayerCells, cellClick, findCellsInRound } from "../round";
import "./style/board.css";

const Board = () => {
  // console.log("in board");
  const [boardCells, setBoardCells] = useState([]);
  const [playerCells, setPlayerCells] = useState([]);
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState(null);
  const [activeTile, setActiveTile] = useState(null);
  const [roundCells, setRoundCells] = useState([]);
  // console.log(players, "players");

  useEffect(() => {
    const { boardCells, activePlayer, players } = setup();
    setBoardCells(boardCells);
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer);
    setPlayers(players);
  }, []);

  const clickOnCell = cell => {
    cellClick(cell, activeTile, boardCells, playerCells);
    setActiveTile(null);
    setRoundCells(findCellsInRound(boardCells, cell));
    // console.log("round cells in clicked cells", roundCells);
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
    // console.log("round cells in board", roundCells);
    // roundCells.forEach(cell => console.log(cell.tile.letter));
    execute(roundCells);
    const { boardCells, activePlayer } = setup();
    setBoardCells(boardCells);
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer);
    setRoundCells([]);
    // setActiveTile(null);
  };

  return (
    <div className="board">
      <div className="stuffLeftOfCell">
        <ScoreBoard players={players} />
      </div>
      <div className="cells">
        {boardCells.map(cell => (
          <BoardCell cell={cell} key={cell.index} onClick={() => clickOnCell(cell)}>
            {cell.tile && (
              <div className="tile">
                <div className="tileLetter">{cell.tile.letter}</div>
                <div></div>
                <div className="tilePoints">{cell.tile.points}</div>
              </div>
            )}
          </BoardCell>
        ))}
      </div>

      <div className="playerCells">
        {playerCells.map(playerCell => (
          <div
            className="playerCell"
            // className={classNames("playerCell", { active: isPlayerCellActive(playerCell) })}
            key={playerCell.index}
            onClick={() => playerCellClick(playerCell)}
          >
            {playerCell.tile && <div className="tile">{playerCell.tile.letter}</div>}
          </div>
        ))}
      </div>
      <div className="stuffRightOfCell">
        <ActivePlayerInfo activePlayer={activePlayer} />
        <div className="executeButton" onClick={executeClick}>
          <div className="execute">EXECUTE</div>
        </div>
        <div className="shuffleButton" onClick={console.log("shuffle")}>
          <div className="shuffle">SHUFFLE</div>
        </div>
      </div>
    </div>
  );
};

export default Board;
