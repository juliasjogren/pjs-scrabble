import React, { useState, useEffect } from "react";
import BoardCell from "./boardCell";
import Button from "./button";
import ScoreBoard from "./scoreBoard";
// import ActivePlayerInfo from "./activePlayerInfo";
import { setup, execute } from "../game";
import { moveTileToPlayerCells, cellClick, findCellsInRound } from "../round";
import "./style/board.css";

const Board = ({ players: inputPlayers, onGameOver }) => {
  const [boardCells, setBoardCells] = useState([]);
  const [playerCells, setPlayerCells] = useState([]);
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState(null);
  const [activeTile, setActiveTile] = useState(null);
  const [roundCells, setRoundCells] = useState([]);
  const [showPlayerTiles, setShowPlayerTiles] = useState(false);
  const [toggle, setToggle] = useState("show");

  useEffect(() => {
    console.log("Board mount", inputPlayers);
    const { boardCells, activePlayer, players } = setup(inputPlayers);
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
    if (roundCells.length === 0) {
      return console.log("Enter a Word");
    }
    toggleLetters();
    console.log("roundcell", roundCells);
    execute(roundCells, onGameOver);
    const { boardCells, activePlayer } = setup();
    setBoardCells(boardCells);
    setPlayerCells(activePlayer.playerCells);
    setActivePlayer(activePlayer);
    setRoundCells([]);
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
        <Button className="shuffleBtn" buttonText={"Shuffle"} />
      </div>
      <div className="cells">
        {boardCells.map(cell => (
          <BoardCell cell={cell} key={cell.index} onClick={() => clickOnCell(cell)}>
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
              <div className="tile">{playerCell.tile.letter}</div>
            )}
          </div>
        ))}
      </div>
      <div className="stuffRightOfCell">
        {/* <ActivePlayerInfo activePlayer={activePlayer} /> */}
        <Button className="button" buttonText={"Execute"} onClick={executeClick} />
      </div>
    </div>
  );
};

export default Board;
