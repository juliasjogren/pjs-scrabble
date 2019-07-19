let alfa = [
  { letter: "A", amount: 9, points: 1 },
  { letter: "B", amount: 2, points: 3 },
  { letter: "C", amount: 2, points: 3 },
  { letter: "D", amount: 4, points: 4 },
  { letter: "E", amount: 1, points: 1 },
  { letter: "F", amount: 2, points: 4 },
  { letter: "G", amount: 3, points: 2 },
  { letter: "H", amount: 2, points: 4 },
  { letter: "I", amount: 9, points: 1 },
  { letter: "J", amount: 1, points: 8 },
  { letter: "K", amount: 1, points: 5 },
  { letter: "L", amount: 4, points: 1 },
  { letter: "M", amount: 2, points: 3 },
  { letter: "N", amount: 6, points: 1 },
  { letter: "O", amount: 8, points: 1 },
  { letter: "P", amount: 2, points: 3 },
  { letter: "Q", amount: 1, points: 10 },
  { letter: "R", amount: 6, points: 1 },
  { letter: "S", amount: 4, points: 1 },
  { letter: "T", amount: 6, points: 1 },
  { letter: "U", amount: 4, points: 1 },
  { letter: "V", amount: 2, points: 4 },
  { letter: "W", amount: 2, points: 4 },
  { letter: "X", amount: 1, points: 8 },
  { letter: "Y", amount: 2, points: 4 },
  { letter: "Z", amount: 1, points: 10 }
];

export const findNeighbors = (tiles, tile) => {
  let relatedTiles = tiles.filter(
    t =>
      t.index === tile.index - 1 ||
      t.index === tile.index + 1 ||
      t.index === tile.index + 15 ||
      t.index === tile.index - 15
  );
  // console.log(relatedTiles);
  return relatedTiles;
};

export const makeNeighborsClickable = relatedTiles => {
  relatedTiles.forEach(tile => {
    tile.clickable = true;
  });
  return relatedTiles;
};

export const makeNeighborsUnclickable = relatedTiles => {
  return relatedTiles.map(cell => {
    if (!cell.tile) {
      cell.clickable = false;
    }
    return cell;
  });
};

export const lockTilesWithLetter = cells =>
  cells.map(cell => {
    if (cell.tile) {
      cell.locked = true;
      // cell.clickable = false;
      let neighbors = findNeighbors(cells, cell);
      makeNeighborsClickable(neighbors);
    }
    return cell;
  });

// export const removePlayerTile = (newTile, newPlayerTiles, activeTile) => {};

// rewrite as a generator function (function*)
let letterCount = 0;
const drawTileFromBag = () => {
  const tilesInBag = alfa.reduce((total, letter) => {
    return total + letter.amount;
  }, 0);

  if (tilesInBag === 0) return console.log("No tiles left") || { letter: "NOPE" };

  var letter = alfa[Math.floor(Math.random() * alfa.length)];
  const result = alfa.find(alfa => alfa.letter === letter.letter);
  result.amount -= 1;
  alfa = alfa.filter(alfa => alfa.amount > 0);
  letterCount++;
  // console.log("Letters drawn", letterCount);
  // console.log(
  //   "Letters left",
  //   alfa.reduce((total, letter) => {
  //     return total + letter.amount;
  //   }, 0)
  // );
  return { letter: letter.letter, id: letterCount, points: letter.points };
};

export function createBag() {
  const tilesInBag = alfa.reduce((total, letter) => {
    return total + letter.amount;
  }, 0);

  const bag = [];

  let i = tilesInBag;
  while (i > 0) {
    bag.push(drawTileFromBag());
    i--;
  }

  return bag;
}

export const shuffleTiles = playerCells => {
  // console.log(playerCells);
  playerCells.forEach(cell => {
    let letter = alfa.find(a => a.letter === cell.tile.letter);
    if (letter) {
      letter.amount += 1;
    } else {
      alfa.push(letter);
    }
    // cell.tile = null;
  });
  // console.log(alfa);
  return playerCells;
};

// export  const findLockedNeighborsInRound = (cell, velocity, lockedNeighbors) => {

//     if (!lockedNeighbors) {
//       lockedNeighbors = []
//     }

//     let n = cell.index + 1

//     if cell is locked
//       lockedNeighbors.push(n)
//       findLockedNeighborsInRound(n, velocity, lockedNeighbors)
//   }

// in game

// rightNeighbors = findLockedNeighbors(cell, 1)
// bottomNeighbors = findLockedNeighbors(cell, 15) (-15?)

export const determineDirection = newBoardCells => {
  // let newBoardCells = [...boardCells];
  let newActiveCells = newBoardCells.filter(cell => !!cell.tile && !cell.locked);
  let direction = "";
  // console.log(newActiveCells, "newactive cells");

  if (newActiveCells.length >= 2) {
    let horizontal =
      newActiveCells[0].index === newActiveCells[1].index - 1 ||
      newActiveCells[0].index === newActiveCells[1].index + 1;
    let vertical =
      newActiveCells[0].index === newActiveCells[1].index - 15 ||
      newActiveCells[0].index === newActiveCells[1].index + 15;

    if (horizontal === true) {
      direction = "horizontal";
    } else if (vertical === true) {
      direction = "vertical";
    }
  }
  return direction;
};

export const getPoints = cellsWithPoints => {
  // console.log("in getPoints", cellsWithPoints);
  let points = 0;
  for (let i = 0; i < cellsWithPoints.length; i++) {
    let tile = cellsWithPoints[i].tile;
    points += tile.points;
  }
  // let points = countPoints(newActiveCells);

  // console.log("Current word points", points);
  return points;
};

export const executePoints = () => {
  // let cellWithPoints = findCellsInRound();
  // console.log(cellWithPoints, "cell points");
  // return getPoints(cellWithPoints);
};

export const makeLockedNeighborsUnclickable = newBoardCells => {
  // let newBoardCells = [...boardCells];
  //find locked cells
  let lockedCellsWithTile = newBoardCells.filter(cell => cell.tile && cell.locked);

  let lockedNeighbors = [];

  //foreach locked cell find neighbor and make them unclickable
  lockedCellsWithTile.forEach(cell => {
    let newNeighbors = findNeighbors(newBoardCells, cell);
    newNeighbors.forEach(neighbor => lockedNeighbors.push(neighbor));
    makeNeighborsUnclickable(newNeighbors);
  });

  return lockedNeighbors;
};

export const makeRoundCellsNeighborsUnclickable = (newBoardCells, roundCells) => {
  let roundNeighbors = [];

  roundCells.forEach(cell => {
    let neighbors = findNeighbors(newBoardCells, cell);
    neighbors.forEach(neighbor => {
      roundNeighbors.push(neighbor);
    });
  });
  makeNeighborsUnclickable(roundNeighbors);
};

// export const makeMainWordEdgesClickable = (mainWord, direction) => {
//   let firstRoundCell = mainWord.shift();
//   let lastRoundCell = mainWord.pop();
//   let neighbors = [];

//   if(direction === 'horizontal') {
//     let firstNeighbor = findNeighbors(firstRoundCell

//   } else if (direction === 'vertical'){

//   }

//   makeNeighborsClickable(neighbors)

// };

// export const findLockedNeighborsInRound = (
//   [...newBoardCells],
//   lockedNeighbor,
//   velocity,
//   lockedNeighbors
// ) => {
//   // let newBoardCells = [...boardCells];

//   if (!lockedNeighbors) {
//     lockedNeighbors = [];
//   }

//   let n = newBoardCells.find(cell => lockedNeighbor.index + velocity === cell.index);

//   if (n.locked) {
//     lockedNeighbors.push(n);
//     return findLockedNeighborsInRound(n, velocity, lockedNeighbors);
//   } else return lockedNeighbors;
// };

// export const findNeighborsDirection = (list, clickedCell) => {
//   let lockedNeighborsInRound = [];
//   let neighbors = [];

//   for (let i = 0; i < list.length; i++) {
//     if (list[i].index + 1 === clickedCell.index) {
//       neighbors = findLockedNeighborsInRound(list[i], -1);
//     }
//     if (list[i].index - 1 === clickedCell.index) {
//       neighbors = findLockedNeighborsInRound(list[i], 1);
//     }
//     if (list[i].index - 15 === clickedCell.index) {
//       neighbors = findLockedNeighborsInRound(list[i], 15);
//     }
//     if (list[i].index + 15 === clickedCell.index) {
//       neighbors = findLockedNeighborsInRound(list[i], -15);
//     }

//     neighbors.forEach(cell => {
//       lockedNeighborsInRound.push(cell);
//     });
//   }
//   // console.log(lockedNeighborsInRound, "locked neighbors in line");

//   return lockedNeighborsInRound;
// };
