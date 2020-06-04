let boardCells = [];
let playerCells = [];
let roundCells = [];
let latestClickedCell = null;

const findLockedNeighborsInRound = (lockedNeighbor, velocity, lockedNeighbors) => {
  if (!lockedNeighbors) {
    lockedNeighbors = [];
  }

  let n = boardCells.find((cell) => lockedNeighbor.index + velocity === cell.index);

  if (n && n.locked) {
    lockedNeighbors.push(n);
    return findLockedNeighborsInRound(n, velocity, lockedNeighbors);
  } else return lockedNeighbors;
};

export function checkIfCellIsClickable(clickedCell) {
  if (clickedCell.locked || clickedCell.clickable === false) {
    return "no";
  }
}

const findNeighborsDirection = (list) => {
  let lockedNeighbors = [];

  list.forEach((cell) => {
    let l = findLockedNeighborsInRound(cell, -1);
    l.forEach((cell) => lockedNeighbors.push(cell));
    let r = findLockedNeighborsInRound(cell, +1);
    r.forEach((cell) => lockedNeighbors.push(cell));
    let u = findLockedNeighborsInRound(cell, -15);
    u.forEach((cell) => lockedNeighbors.push(cell));
    let d = findLockedNeighborsInRound(cell, +15);
    d.forEach((cell) => lockedNeighbors.push(cell));
  });

  return lockedNeighbors;
};

export const findCellsInRound = (newBoardCells, clickedCell) => {
  let newActiveCells = boardCells.filter((cell) => !!cell.tile && !cell.locked);

  let direction = determineDirection();

  let moreLockedNeighbors = findNeighborsDirection(newActiveCells, direction);

  let cellsInRound = [...newActiveCells, ...moreLockedNeighbors, clickedCell];
  roundCells = [...new Set(cellsInRound)];

  let newRoundCells = roundCells.filter((cell) => cell.tile);

  return newRoundCells;
};

const findHigherNeighborsInRound = (cellToCheck, velocity, neighbors) => {
  if (!neighbors) {
    neighbors = [];
  }

  let n = boardCells.find((cell) => cellToCheck.index + velocity === cell.index);
  if (n && n.tile) {
    if (n.locked) {
      neighbors.push(n);
    }
    return findHigherNeighborsInRound(n, velocity, neighbors);
  } else return neighbors;
};
const findLesserNeighborsInRound = (cellToCheck, velocity, neighbors) => {
  if (!neighbors) {
    neighbors = [];
  }

  let n = boardCells.find((cell) => cellToCheck.index - velocity === cell.index);

  if (n && n.tile) {
    if (n.locked) {
      neighbors.push(n);
    }
    return findLesserNeighborsInRound(n, velocity, neighbors);
  } else return neighbors;
};

export const determineDirection = () => {
  const activeCells = boardCells.filter((cell) => !!cell.tile && !cell.locked).sort((a, b) => a.index - b.index);

  if (activeCells.length < 2) return "no";

  const first = activeCells.shift();
  const last = activeCells.pop();
  const distance = Math.abs(first.index - last.index);

  if (distance < 15) return "horizontal";
  else return "vertical";
};

export const makeMainWord = (roundCells, direction) => {
  let unlockedRoundCells = roundCells.filter((cell) => !cell.locked);
  let cellToCheck = unlockedRoundCells[0];
  let mainWord = [];
  let velocity = 0;
  if (direction === "horizontal") {
    velocity = 1;
  }
  if (direction === "vertical") {
    velocity = 15;
  }

  if (velocity !== 0) {
    let lesserRoundCells = findLesserNeighborsInRound(cellToCheck, velocity);
    let higherRoundCells = findHigherNeighborsInRound(cellToCheck, velocity);
    mainWord = lesserRoundCells.concat(higherRoundCells, unlockedRoundCells);
  }

  let sortedMainWord = mainWord.sort((a, b) => a.index - b.index);
  return sortedMainWord;
};

export const moveTileToPlayerCells = (tile, newBoardCells, newPlayerCells) => {
  playerCells = newPlayerCells;
  boardCells = newBoardCells;
  let found = false;

  playerCells = playerCells.map((playerCell) => {
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
  latestClickedCell = clickedCell;

  // remove tile from cell
  if (clickedCell.tile) {
    moveTileToPlayerCells(clickedCell.tile, boardCells, playerCells);
    let newRoundCells = findCellsInRound(boardCells, clickedCell);
    roundCells = newRoundCells.filter((cell) => cell.tile);
    clickedCell.tile = null;
  }

  //Add tile to cell
  if (activeTile && !clickedCell.tile) {
    clickedCell.tile = activeTile;

    playerCells = playerCells.map((cell) => {
      if (cell.tile && cell.tile.id === activeTile.id) cell.tile = null;

      return cell;
    });
  }
}
