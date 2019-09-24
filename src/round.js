import {
  findNeighbors,
  makeNeighborsUnclickable,
  makeNeighborsClickable,
  makeLockedNeighborsUnclickable,
  makeRoundCellsNeighborsUnclickable
} from "./utils";

let boardCells = [];
let playerCells = [];
let roundCells = [];

const findLockedNeighborsInRound = (lockedNeighbor, velocity, lockedNeighbors) => {
  if (!lockedNeighbors) {
    lockedNeighbors = [];
  }

  let n = boardCells.find(cell => lockedNeighbor.index + velocity === cell.index);

  if (n.locked) {
    lockedNeighbors.push(n);
    return findLockedNeighborsInRound(n, velocity, lockedNeighbors);
  } else return lockedNeighbors;
};

export function checkIfCellIsClickable(clickedCell) {
  if (clickedCell.locked || clickedCell.clickable === false) {
    return "no";
  }
}

export function manageCellNeighbors(cell, action) {
  let cellNeighbors = findNeighbors(boardCells, cell);

  if (action === "unclickable") {
    makeNeighborsUnclickable(cellNeighbors);
  } else if (action === "clickable") {
    makeNeighborsClickable(cellNeighbors);
  }
}

const findNeighborsDirection = list => {
  let lockedNeighbors = [];

  list.forEach(cell => {
    let l = findLockedNeighborsInRound(cell, -1);
    l.forEach(cell => lockedNeighbors.push(cell));
    let r = findLockedNeighborsInRound(cell, +1);
    r.forEach(cell => lockedNeighbors.push(cell));
    let u = findLockedNeighborsInRound(cell, -15);
    u.forEach(cell => lockedNeighbors.push(cell));
    let d = findLockedNeighborsInRound(cell, +15);
    d.forEach(cell => lockedNeighbors.push(cell));
  });

  return lockedNeighbors;
};

export const findCellsInRound = (newBoardCells, clickedCell) => {
  let newActiveCells = boardCells.filter(cell => !!cell.tile && !cell.locked);

  let direction = determineDirection();

  let moreLockedNeighbors = findNeighborsDirection(newActiveCells, direction);

  let cellsInRound = [...newActiveCells, ...moreLockedNeighbors, clickedCell];
  roundCells = [...new Set(cellsInRound)];

  // console.log("roundCells", roundCells);
  // roundCells.forEach(cell => console.log(cell.tile.letter));

  return roundCells;
};

const findUnlockedNeighborsInRound = (cellToCheck, velocity, neighbors) => {
  if (!neighbors) {
    neighbors = [];
  }

  let n = boardCells.find(cell => cellToCheck.index + velocity === cell.index);

  if (n.tile) {
    neighbors.push(n);
    return findUnlockedNeighborsInRound(n, velocity, neighbors);
  } else return neighbors;
};

const determineDirection = () => {
  const activeCells = boardCells
    .filter(cell => !!cell.tile && !cell.locked)
    .sort((a, b) => a.index - b.index);

  if (activeCells.length < 2) return "no";

  const first = activeCells.shift();
  const last = activeCells.pop();
  const distance = Math.abs(first.index - last.index);

  if (distance < 15) return "horizontal";
  else return "vertical";
};

const makeClickedCellEdgesClickable = (neighbors, clickedCell) => {
  let lockedNeighbors = neighbors.filter(cell => cell.locked);
  let unlockedNeighbors = neighbors.filter(cell => !cell.locked);
  let neighborsToClickable = [];
  let cellNeighbors = [];

  unlockedNeighbors.forEach(cell => {
    neighborsToClickable.push(cell);
  });

  lockedNeighbors.forEach(cell => {
    // console.log(lockedNeighbors);
    // console.log(cell.tile.letter);
    if (cell.index === clickedCell.index - 1) {
      cellNeighbors = findLockedNeighborsInRound(cell, -1);
      if (cellNeighbors.length > 0) {
        let last = cellNeighbors.pop();
        // console.log("last", last.tile.letter);
        let lastCellNeighbors = findNeighbors(boardCells, last);
        let cellToClick = lastCellNeighbors.find(cell => cell.index === last.index - 1);
        neighborsToClickable.push(cellToClick);
      } else {
        let lastCellNeighbors = findNeighbors(boardCells, cell);
        let cellToClick = lastCellNeighbors.find(neighbor => neighbor.index === cell.index - 1);
        neighborsToClickable.push(cellToClick);
      }
    }
    if (cell.index === clickedCell.index + 1) {
      cellNeighbors = findLockedNeighborsInRound(cell, +1);
      if (cellNeighbors.length > 0) {
        let last = cellNeighbors.pop();
        // console.log("last", last.tile.letter);
        let lastCellNeighbors = findNeighbors(boardCells, last);
        let cellToClick = lastCellNeighbors.find(cell => cell.index === last.index + 1);
        neighborsToClickable.push(cellToClick);
      } else {
        let lastCellNeighbors = findNeighbors(boardCells, cell);
        let cellToClick = lastCellNeighbors.find(neighbor => neighbor.index === cell.index + 1);
        neighborsToClickable.push(cellToClick);
      }
    }
    if (cell.index === clickedCell.index - 15) {
      cellNeighbors = findLockedNeighborsInRound(cell, -15);
      if (cellNeighbors.length > 0) {
        let last = cellNeighbors.pop();
        // console.log("last", last.tile.letter);
        let lastCellNeighbors = findNeighbors(boardCells, last);
        let cellToClick = lastCellNeighbors.find(cell => cell.index === last.index - 15);
        neighborsToClickable.push(cellToClick);
      } else {
        let lastCellNeighbors = findNeighbors(boardCells, cell);
        let cellToClick = lastCellNeighbors.find(neighbor => neighbor.index === cell.index - 15);
        neighborsToClickable.push(cellToClick);
      }
    }
    if (cell.index === clickedCell.index + 15) {
      cellNeighbors = findLockedNeighborsInRound(cell, +15);
      if (cellNeighbors.length > 0) {
        let last = cellNeighbors.pop();
        // console.log("last", last.tile.letter);
        let lastCellNeighbors = findNeighbors(boardCells, last);
        let cellToClick = lastCellNeighbors.find(cell => cell.index === last.index + 15);
        neighborsToClickable.push(cellToClick);
      } else {
        let lastCellNeighbors = findNeighbors(boardCells, cell);
        let cellToClick = lastCellNeighbors.find(neighbor => neighbor.index === cell.index + 15);
        neighborsToClickable.push(cellToClick);
      }
    }
  });
  makeNeighborsClickable(neighborsToClickable);
};

const makeMainWordEdgesClickable = (direction, mainWord) => {
  let first = mainWord.shift();
  let last = mainWord.pop();
  let firstNeighbors = findNeighbors(boardCells, first);
  let lastNeighbors = findNeighbors(boardCells, last);

  let cellsToClickable = [];
  if (direction === "horizontal") {
    let firstNeighbor = firstNeighbors.find(cell => cell.index === first.index - 1);
    let lastNeighbor = lastNeighbors.find(cell => cell.index === last.index + 1);
    cellsToClickable.push(firstNeighbor, lastNeighbor);
  } else if (direction === "vertical") {
    let firstNeighbor = firstNeighbors.find(cell => cell.index === first.index - 15);
    let lastNeighbor = lastNeighbors.find(cell => cell.index === last.index + 15);
    cellsToClickable.push(firstNeighbor, lastNeighbor);
  }
  makeNeighborsClickable(cellsToClickable);
};

const makeClickedCellLockedNeighborsClickable = (lockedNeighbors, clickedCell) => {
  let neighborsToClickable = [];

  lockedNeighbors.forEach(cell => {
    if (cell.index + 1 === clickedCell.index) {
      // console.log("left Neighbor");
      let cellNeighbor = boardCells.find(neighbor => neighbor.index === cell.index - 1);
      neighborsToClickable.push(cellNeighbor);
      // let cellNeighbors = findLockedNeighborsInRound(cellNeighbor, -1)
      // cellNeighbors.forEach(neighbor => neighborsToClickable.push(neighbor))
    }
    if (cell.index - 1 === clickedCell.index) {
      // console.log("right Neighbor");
      let cellNeighbor = boardCells.find(neighbor => neighbor.index === cell.index + 1);
      neighborsToClickable.push(cellNeighbor);
    }
    if (cell.index + 15 === clickedCell.index) {
      // console.log("up Neighbor");
      let cellNeighbor = boardCells.find(neighbor => neighbor.index === cell.index - 15);
      neighborsToClickable.push(cellNeighbor);
    }
    if (cell.index - 15 === clickedCell.index) {
      // console.log("down Neighbor");
      let cellNeighbor = boardCells.find(neighbor => neighbor.index === cell.index + 15);
      neighborsToClickable.push(cellNeighbor);
    }
  });

  makeNeighborsClickable(neighborsToClickable);
};

const makeMainWord = (roundCells = [], direction = "no", clickedCell) => {
  let activeRoundCells = roundCells.filter(cell => !cell.locked);
  let leftNeighborsToClickedCell = [];
  let rightNeighborsToClickedCell = [];
  let upNeighborsToClickedCell = [];
  let downNeighborsToClickedCell = [];

  if (direction === "horizontal") {
    leftNeighborsToClickedCell = findUnlockedNeighborsInRound(clickedCell, -1);
    rightNeighborsToClickedCell = findUnlockedNeighborsInRound(clickedCell, +1);
  } else if (direction === "vertical") {
    upNeighborsToClickedCell = findUnlockedNeighborsInRound(clickedCell, -15);
    downNeighborsToClickedCell = findUnlockedNeighborsInRound(clickedCell, +15);
  }

  let mainWord = leftNeighborsToClickedCell.concat(
    rightNeighborsToClickedCell,
    upNeighborsToClickedCell,
    downNeighborsToClickedCell
  );
  mainWord.push(clickedCell);

  activeRoundCells.forEach(cell => {
    let inMainWord = mainWord.find(n => n.index === cell.index);
    if (!inMainWord) {
      mainWord.push(cell);
    }
  });
  mainWord.sort((a, b) => a.index - b.index);

  // console.log("main word");
  // mainWord.forEach(cell => console.log(cell.tile.letter));

  return mainWord;
};

export const moveTileToPlayerCells = (tile, newBoardCells, newPlayerCells) => {
  playerCells = newPlayerCells;
  boardCells = newBoardCells;
  let found = false;
  // console.log("newplayer cells", newPlayerCells);
  // console.log("playercells", playerCells);
  playerCells = playerCells.map(playerCell => {
    if (!found && !playerCell.tile) {
      playerCell.tile = tile;
      found = true;
    }
    return playerCell;
  });
};

export function cellClick(clickedCell, activeTile, newBoardCells, newPlayerCells) {
  playerCells = newPlayerCells;
  boardCells = newBoardCells;

  if (checkIfCellIsClickable(clickedCell) === "no") {
    return console.log("NOPE!!!");
  }

  // let newBoardCells = boardCells

  // starting point
  if (clickedCell.tile) {
    manageCellNeighbors(clickedCell, "unclickable");
    moveTileToPlayerCells(clickedCell.tile, boardCells, playerCells);
    clickedCell.tile = null;
  }
  // console.log("clicked cell", clickedCell);

  if (activeTile && !clickedCell.tile) {
    clickedCell.tile = activeTile;
    let newActiveCells = boardCells.filter(cell => !!cell.tile && !cell.locked);

    makeLockedNeighborsUnclickable(boardCells);

    let clickedCellNeighbors = findNeighbors(boardCells, clickedCell);
    let lockedNeighbors = clickedCellNeighbors.filter(cell => cell.locked);
    let roundCells = findCellsInRound(boardCells, clickedCell);
    let direction = determineDirection();
    let mainWord = makeMainWord(roundCells, direction, clickedCell);

    makeRoundCellsNeighborsUnclickable(boardCells, roundCells);

    if (newActiveCells.length > 1) {
      makeMainWordEdgesClickable(direction, mainWord);
    } else {
      makeClickedCellEdgesClickable(clickedCellNeighbors, clickedCell);
      makeClickedCellLockedNeighborsClickable(lockedNeighbors, clickedCell);
    }

    playerCells = playerCells.map(cell => {
      if (cell.tile && cell.tile.id === activeTile.id) cell.tile = null;

      return cell;
    });
  }
}
