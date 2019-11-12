let makeAlfa = () => [
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

// let alfaTest = [
//   { letter: "A", amount: 5, points: 1 },
//   { letter: "B", amount: 1, points: 3 },
//   { letter: "C", amount: 1, points: 3 },
//   { letter: "D", amount: 1, points: 4 },
//   { letter: "E", amount: 1, points: 1 },
//   { letter: "F", amount: 1, points: 4 },
//   { letter: "G", amount: 1, points: 2 },
//   { letter: "H", amount: 1, points: 4 },
//   { letter: "I", amount: 1, points: 1 },
//   { letter: "J", amount: 1, points: 8 },
//   { letter: "K", amount: 1, points: 5 },
//   { letter: "L", amount: 1, points: 1 },
//   { letter: "M", amount: 1, points: 3 },
//   { letter: "N", amount: 1, points: 1 },
//   { letter: "O", amount: 1, points: 1 },
//   { letter: "P", amount: 2, points: 3 },
//   { letter: "Q", amount: 1, points: 10 },
//   { letter: "R", amount: 1, points: 1 },
//   { letter: "S", amount: 1, points: 1 },
//   { letter: "T", amount: 1, points: 1 },
//   { letter: "U", amount: 1, points: 1 },
//   { letter: "V", amount: 1, points: 4 },
//   { letter: "W", amount: 2, points: 4 },
//   { letter: "X", amount: 1, points: 8 },
//   { letter: "Y", amount: 2, points: 4 },
//   { letter: "Z", amount: 1, points: 10 }
// ];

export function createBoardCells() {
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

let letterCount = 0;
const makeRandomTileFromAlfaAndDecreaseItsAmount = alfa => {
  const tilesInBag = alfa.reduce((total, letter) => {
    return total + letter.amount;
  }, 0);

  if (tilesInBag === 0) return console.log("No tiles left") || { letter: "NOPE" };

  const letter = alfa[Math.floor(Math.random() * alfa.length)];
  const result = alfa.find(alfa => alfa.letter === letter.letter);
  result.amount -= 1;
  alfa = alfa.filter(alfa => alfa.amount > 0);
  letterCount++;

  return { letter: letter.letter, id: letterCount, points: letter.points };
};

export const makeAllUnlockedCellsClickable = BoardCells => {
  let unlockedCells = BoardCells.filter(cell => !cell.locked);
  // console.log(unlockedCells);
  makeNeighborsClickable(unlockedCells);
};

export function createBag() {
  // console.log("in create bag");
  const gameAlfa = makeAlfa();
  const tilesInBag = gameAlfa.reduce((total, letter) => {
    return total + letter.amount;
  }, 0);

  const bag = [];

  let i = tilesInBag;
  while (i > 0) {
    bag.push(makeRandomTileFromAlfaAndDecreaseItsAmount(gameAlfa));
    i--;
  }

  console.log("bag in create bag", bag);

  return bag;
}

export function createPlayerCells(bag) {
  const tiles = drawTilesFromBag(bag, 7);

  return Array(7)
    .fill()
    .map((_, i) => ({
      index: i,
      tile: tiles.pop()
    }));
}

export function drawTilesFromBag(bag, numberOfTiles) {
  const tiles = [];
  if (checkIfTilesLeftInBag(bag) === true) {
    for (let i = 0; i < numberOfTiles; i++) {
      tiles.push(bag.shift());
    }
  }
  return tiles;
}

// const findLockedNeighborsInRound = (lockedNeighbor, velocity, lockedNeighbors) => {
//   let newBoardCells = [...boardCells];

//   if (!lockedNeighbors) {
//     lockedNeighbors = [];
//   }

//   let n = newBoardCells.find(cell => lockedNeighbor.index + velocity === cell.index);

//   if (n.locked) {
//     lockedNeighbors.push(n);
//     return findLockedNeighborsInRound(n, velocity, lockedNeighbors);
//   } else return lockedNeighbors;
// };

export function checkIfTilesLeftInBag(bag) {
  if (bag.length === 0) {
    return false;
  } else return true;
}

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

export const executePoints = roundCells => {
  return getPoints(roundCells);
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
