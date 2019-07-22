import React, { useState, useEffect } from "react";
import classNames from "classnames";

import BoardCell from "./boardCell";

import {
  findNeighbors,
  lockTilesWithLetter,
  makeNeighborsClickable,
  makeNeighborsUnclickable,
  determineDirection,
  makeRoundCellsNeighborsUnclickable,
  makeMainWordEdgesClickable,
  // getPoints,
  // executePoints,
  makeLockedNeighborsUnclickable,
  // findNeighborsDirection,
  // findLockedNeighborsInRound,
  shuffleTiles
} from "../utils";

import "./style/board.css";
import { isRegExp } from "util";

function createBoardCells() {
  function BoardCell(index) {
    let clickableTile = null;
    if (index === 112) {
      clickableTile = true;
    } else clickableTile = false;
    return {
      index,
      clickable: clickableTile,
      tile: null
    };
  }

  return Array(225)
    .fill()
    .map((_, i) => new BoardCell(i));
}

// function createActiveTiles() {
//   return boardCells.filter(tile => !!tile.letter && !tile.locked);
// }

const Board = ({ startingBag }) => {
  const [bag, setBag] = useState(startingBag);
  const [boardCells, setBoardCells] = useState(createBoardCells);
  const [playerCells, setPlayerCells] = useState(createPlayerCells);
  const [activeTiles, setActiveTiles] = useState();
  const [activeTile, setActiveTile] = useState(null);
  const [roundCells, setRoundCells] = useState([]);

  useEffect(() => {
    // console.log(
    //   "activeTiles",
    //   boardCells
    //     .filter(cell => !!cell.tile && !cell.locked)
    //     .sort((a, b) => a.index - b.index)
    //     .map(cell => cell.tile.letter)
    //     .join("")
    // );
    setActiveTiles(boardCells.filter(tile => !!tile.letter && !tile.locked));
  }, [boardCells]);

  function drawTilesFromBag(numberOfTiles) {
    if (bag.length === 0) return console.log("Game Over!") || {};
    const newBag = [...bag];

    const tiles = [];

    for (let i = 0; i < numberOfTiles; i++) {
      tiles.push(newBag.shift());
    }

    setBag(newBag);
    return tiles;
  }

  function createPlayerCells() {
    const tiles = drawTilesFromBag(7);

    return Array(7)
      .fill()
      .map((_, i) => ({
        index: i,
        tile: tiles.pop()
      }));
  }

  const moveTileToPlayerCells = tile => {
    let found = false;
    setPlayerCells(
      playerCells.map(playerCell => {
        if (!found && !playerCell.tile) {
          playerCell.tile = tile;
          found = true;
        }

        return playerCell;
      })
    );
  };

  const findNeighborsDirection = (list, clickedCell) => {
    let lockedNeighborsInRound = [];
    let neighbors = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].index + 1 === clickedCell.index) {
        neighbors = findLockedNeighborsInRound(list[i], -1);
      }
      if (list[i].index - 1 === clickedCell.index) {
        neighbors = findLockedNeighborsInRound(list[i], 1);
      }
      if (list[i].index - 15 === clickedCell.index) {
        neighbors = findLockedNeighborsInRound(list[i], 15);
      }
      if (list[i].index + 15 === clickedCell.index) {
        neighbors = findLockedNeighborsInRound(list[i], -15);
      }

      neighbors.forEach(cell => {
        lockedNeighborsInRound.push(cell);
      });
    }
    // console.log(lockedNeighborsInRound, "locked neighbors in line");

    return lockedNeighborsInRound;
  };

  const findCellsInRound = (newBoardCells, clickedCell) => {
    // let newBoardCells = [...boardCells];
    let newActiveCells = boardCells.filter(cell => !!cell.tile && !cell.locked);

    let neighbors = findNeighbors(newBoardCells, clickedCell);
    let lockedNeighbors = neighbors.filter(cell => cell.locked);

    let moreLockedNeighbors = findNeighborsDirection(lockedNeighbors, clickedCell);

    let newCellsInRound = [...roundCells, ...lockedNeighbors, ...moreLockedNeighbors, clickedCell];

    setRoundCells(newCellsInRound);

    return newCellsInRound;
  };

  const findLockedNeighborsInRound = (lockedNeighbor, velocity, lockedNeighbors) => {
    let newBoardCells = [...boardCells];

    if (!lockedNeighbors) {
      lockedNeighbors = [];
    }

    let n = newBoardCells.find(cell => lockedNeighbor.index + velocity === cell.index);

    if (n.locked) {
      lockedNeighbors.push(n);
      return findLockedNeighborsInRound(n, velocity, lockedNeighbors);
    } else return lockedNeighbors;
  };

  const findMainWordClickableNeighbors = (clickedCell, direction) => {
    let newBoardCells = [...boardCells];
    let newActiveCells = newBoardCells.filter(cell => !!cell.tile && !cell.locked);
    let sortedActiveCells = newActiveCells.sort((a, b) => a.index - b.index);
    let lockedNeighbors = [];

    sortedActiveCells.forEach(cell => {
      let neighbors = findNeighbors(newBoardCells, cell);
      let locked = neighbors.filter(cell => cell.locked);
      locked.forEach(cell => lockedNeighbors.push(cell));
    });

    let lockedRoundCells = [];
    let lastActive = sortedActiveCells.pop();

    if (direction === "horizontal") {
      let leftLockedNeighbor = lockedNeighbors.find(
        cell => cell.index === sortedActiveCells[0].index - 1
      );
      let rightLockedNeighbor = lockedNeighbors.find(cell => cell.index === lastActive.index + 1);

      if (leftLockedNeighbor) {
        let leftNeighbors = findLockedNeighborsInRound(leftLockedNeighbor, -1);
        leftNeighbors.forEach(cell => lockedRoundCells.push(cell));
        lockedRoundCells.push(leftLockedNeighbor);
      }
      if (rightLockedNeighbor) {
        let rightNeighbors = findLockedNeighborsInRound(rightLockedNeighbor, 1);
        rightNeighbors.forEach(cell => lockedRoundCells.push(cell));
        lockedRoundCells.push(rightLockedNeighbor);
      }
    } else if (direction === "vertical") {
      let upLockedNeighbor = lockedNeighbors.find(
        cell => cell.index === sortedActiveCells[0].index - 15
      );
      let downLockedNeighbor = lockedNeighbors.find(cell => cell.index === lastActive.index + 15);

      if (upLockedNeighbor) {
        let upNeighbors = findLockedNeighborsInRound(upLockedNeighbor, -15);
        upNeighbors.forEach(cell => lockedRoundCells.push(cell));
        lockedRoundCells.push(upLockedNeighbor);
      }
      if (downLockedNeighbor) {
        let downNeighbors = findLockedNeighborsInRound(downLockedNeighbor, 15);
        downNeighbors.forEach(cell => lockedRoundCells.push(cell));
        lockedRoundCells.push(downLockedNeighbor);
      }
    }

    console.log("lockedd round cells");
    lockedRoundCells.forEach(cell => console.log(cell.index, cell.tile.letter));
    let mainWord = newActiveCells.concat(lockedRoundCells);
    mainWord.push(clickedCell);
    let sortedMainWord = mainWord.sort((a, b) => a.index - b.index);
    // console.log("sorted main word");
    // sortedMainWord.forEach(cell => console.log(cell.index, cell.tile.letter));

    return sortedMainWord;
  };

  const makeMainWordEdgesClickable = (mainWord, direction) => {
    let newBoardCells = [...boardCells];
    let firstRoundCell = mainWord.shift();
    let lastRoundCell = mainWord.pop();
    console.log("first round cell", firstRoundCell.index, firstRoundCell.tile.letter);
    console.log("last round cell", lastRoundCell.index, lastRoundCell.tile.letter);
    let neighbors = [];
    let firstNeighbors = findNeighbors(newBoardCells, firstRoundCell);
    let lastNeighbors = findNeighbors(newBoardCells, lastRoundCell);

    if (direction === "horizontal") {
      let first = firstNeighbors.find(cell => cell.index === firstRoundCell.index - 1);
      let last = lastNeighbors.find(cell => cell.index === lastRoundCell.index + 1);
      neighbors.push(first);
      neighbors.push(last);
    } else if (direction === "vertical") {
      let first = firstNeighbors.find(cell => cell.index === firstRoundCell.index - 15);
      let last = lastNeighbors.find(cell => cell.index === lastRoundCell.index + 15);
      neighbors.push(first);
      neighbors.push(last);
    }

    makeNeighborsClickable(neighbors);
  };

  const makeClickedCellLockedNeighborsClickable = (lockedNeighbors, clickedCell) => {
    let newBoardCells = [...boardCells];
    let neighborsToClickable = [];

    lockedNeighbors.forEach(cell => {
      if (cell.index + 1 === clickedCell.index) {
        console.log("left Neighbor");
        let cellNeighbor = newBoardCells.find(neighbor => neighbor.index === cell.index - 1);
        neighborsToClickable.push(cellNeighbor);
        // let cellNeighbors = findLockedNeighborsInRound(cellNeighbor, -1)
        // cellNeighbors.forEach(neighbor => neighborsToClickable.push(neighbor))
      }
      if (cell.index - 1 === clickedCell.index) {
        console.log("right Neighbor");
        let cellNeighbor = newBoardCells.find(neighbor => neighbor.index === cell.index + 1);
        neighborsToClickable.push(cellNeighbor);
      }
      if (cell.index + 15 === clickedCell.index) {
        console.log("up Neighbor");
        let cellNeighbor = newBoardCells.find(neighbor => neighbor.index === cell.index - 15);
        neighborsToClickable.push(cellNeighbor);
      }
      if (cell.index - 15 === clickedCell.index) {
        console.log("down Neighbor");
        let cellNeighbor = newBoardCells.find(neighbor => neighbor.index === cell.index + 15);
        neighborsToClickable.push(cellNeighbor);
      }
    });

    makeNeighborsClickable(neighborsToClickable);
  };

  const cellClick = clickedCell => {
    if (clickedCell.locked || clickedCell.clickable === false) {
      return console.log("NOPE");
    }

    // cell has tile, move tile to playercells
    if (clickedCell.tile) {
      let newBoardCells = [...boardCells];

      let neighbors = findNeighbors(newBoardCells, clickedCell);
      makeNeighborsUnclickable(neighbors);

      moveTileToPlayerCells(clickedCell.tile);
      clickedCell.tile = null;
      setBoardCells(newBoardCells);
    }

    // have an active tile and clicked cell have not tile
    if (activeTile && !clickedCell.tile) {
      let newBoardCells = [...boardCells];

      //put activeTile on clicked cell
      clickedCell.tile = activeTile;
      let clickedCellNeighbors = [];
      let newActiveCells = boardCells.filter(cell => !!cell.tile && !cell.locked);

      makeLockedNeighborsUnclickable(newBoardCells);
      clickedCellNeighbors = findNeighbors(newBoardCells, clickedCell);
      let lockedNeighbors = clickedCellNeighbors.filter(cell => cell.locked);
      let roundCells = findCellsInRound(newBoardCells, clickedCell);
      makeRoundCellsNeighborsUnclickable(newBoardCells, roundCells);

      let direction = determineDirection(newBoardCells);
      // let wordsInRound = findWordsInRound(roundCells, direction);

      // console.log("WordsInRound");
      // wordsInRound.forEach(cell => console.log(cell.index, cell.tile));

      let mainWord = findMainWordClickableNeighbors(clickedCell, direction);
      console.log("main Word");
      mainWord.forEach(cell => console.log(cell.index, cell.tile.letter));

      if (mainWord.length > 1) {
        makeMainWordEdgesClickable(mainWord, direction);
      } else {
        makeNeighborsClickable(clickedCellNeighbors);
        makeClickedCellLockedNeighborsClickable(lockedNeighbors, clickedCell);
      }

      setBoardCells(newBoardCells);
      setPlayerCells(
        playerCells.map(cell => {
          if (cell.tile && cell.tile.id === activeTile.id) cell.tile = null;

          return cell;
        })
      );
      setActiveTile(null);
    }

    // executePoints();
  };

  const playerCellClick = ({ tile }) => {
    if (activeTile) {
      moveTileToPlayerCells(activeTile);
      setActiveTile(null);
    }

    if (tile) {
      setActiveTile(tile);
    }
  };

  const drawTiles = () => {
    const numberOfCellsWithoutTiles = playerCells.filter(cell => !cell.tile).length;

    if (numberOfCellsWithoutTiles === 0) return;

    const newTiles = drawTilesFromBag(numberOfCellsWithoutTiles);

    const newPlayerCells = playerCells.map(cell => {
      if (!cell.tile) {
        cell.tile = newTiles.pop();
      }

      return cell;
    });

    setPlayerCells(newPlayerCells);
  };

  const lockWord = () => {
    const newTiles = lockTilesWithLetter(boardCells);
    setBoardCells(newTiles);
  };

  const ShufflePlayerTiles = () => {
    let newPlayerCells = [...playerCells];
    let newBag = [...bag];

    newPlayerCells.forEach(cell => newBag.push(cell.tile));
    setBag(newBag);
    newPlayerCells.forEach(cell => (cell.tile = null));
    setPlayerCells(newPlayerCells);
    drawTiles();
  };

  const execute = () => {
    lockWord();
    drawTiles();
    setRoundCells([]);
  };

  const isPlayerCellActive = ({ tile }) => activeTile && tile && tile.id === activeTile.id;

  return (
    <div className="board">
      <div className="cells">
        {boardCells.map(cell => (
          <BoardCell cell={cell} key={cell.index} onClick={() => cellClick(cell)}>
            {cell.tile && cell.tile.letter}
          </BoardCell>
        ))}
      </div>
      <div className="playerCells">
        {playerCells.map(playerCell => (
          <div
            className={classNames("playerCell",
              { active: isPlayerCellActive(playerCell) }
            )}
            key={playerCell.index}
            onClick={() => playerCellClick(playerCell)}
          >
            {playerCell.tile && playerCell.tile.letter}
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
        <div className="shuffleButton" onClick={execute}>
          <span>EXECUTE</span>
        </div>
        <div className="executeButton" onClick={ShufflePlayerTiles}>
          <span>SHUFFLE</span>
        </div>
      </div>
    </div>
  );
};

export default Board;
