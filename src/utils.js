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
  { letter: "Z", amount: 1, points: 10 },
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

let twoWord = [16, 28, 32, 42, 48, 56, 64, 70, 112, 154, 160, 168, 176, 182, 192, 196, 208];
let threeWord = [0, 7, 14, 105, 119, 210, 217, 224];
let twoLetter = [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165, 172, 179, 186, 188, 213, 221];
let threeLetter = [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204];

export function createBoardCells() {
  function BoardCell(index) {
    let clickableTile = null;
    let firstCell = null;
    let bonus = false;

    if (twoLetter.find((item) => item === index)) {
      bonus = "twoL";
    }
    if (threeLetter.find((item) => item === index)) {
      bonus = "threeL";
    }
    if (twoWord.find((item) => item === index)) {
      bonus = "twoW";
    }
    if (threeWord.find((item) => item === index) || index < 1) {
      bonus = "threeW";
    }

    if (index === 112) {
      clickableTile = true;
      firstCell = true;
    } else {
      clickableTile = false;
      firstCell = false;
    }

    return {
      index,
      first: firstCell,
      clickable: clickableTile,
      bonus: bonus,
      tile: null,
    };
  }

  return Array(225)
    .fill()
    .map((_, i) => new BoardCell(i));
}

let letterCount = 0;
const makeRandomTileFromAlfaAndDecreaseItsAmount = (alfa) => {
  const tilesInBag = alfa.reduce((total, letter) => {
    return total + letter.amount;
  }, 0);

  if (tilesInBag === 0) return console.log("No tiles left") || { letter: "NOPE" };

  const letter = alfa[Math.floor(Math.random() * alfa.length)];
  const result = alfa.find((alfa) => alfa.letter === letter.letter);
  result.amount -= 1;
  alfa = alfa.filter((alfa) => alfa.amount > 0);
  letterCount++;

  return { letter: letter.letter, id: letterCount, points: letter.points };
};

export const makeAllUnlockedCellsClickable = (BoardCells) => {
  let unlockedCells = BoardCells.filter((cell) => !cell.locked);
  makeNeighborsClickable(unlockedCells);
};

export function createBag() {
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
  return bag;
}

export function createPlayerCells(bag) {
  const tiles = drawTilesFromBag(bag, 7);

  return Array(7)
    .fill()
    .map((_, i) => ({
      index: i,
      tile: tiles.pop(),
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

export function checkIfTilesLeftInBag(bag) {
  if (bag.length === 0) {
    return false;
  } else return true;
}

export const findNeighbors = (tiles, tile) => {
  let relatedTiles = tiles.filter((t) => t.index === tile.index - 1 || t.index === tile.index + 1 || t.index === tile.index + 15 || t.index === tile.index - 15);
  return relatedTiles;
};

export const makeNeighborsClickable = (relatedTiles) => {
  relatedTiles.forEach((tile) => {
    tile.clickable = true;
  });
  return relatedTiles;
};

export const makeNeighborsUnclickable = (relatedTiles) => {
  return relatedTiles.map((cell) => {
    if (!cell.tile) {
      cell.clickable = false;
    }
    return cell;
  });
};

export const lockTilesWithLetter = (cells) =>
  cells.map((cell) => {
    if (cell.tile) {
      cell.locked = true;
      let neighbors = findNeighbors(cells, cell);
      makeNeighborsClickable(neighbors);
    }
    return cell;
  });

export const executePoints = (words) => {
  let points = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let doubbleWord = 0;
    let tripleWord = 0;
    let wordPoints = 0;

    word.forEach((cell) => {
      if (cell.locked) {
      }
      let cellPoints = cell.tile.points;
      if (!cell.locked) {
        if (cell.bonus === "twoL") {
          cellPoints = cellPoints * 2;
        }
        if (cell.bonus === "threeL") {
          cellPoints = cellPoints * 3;
        }
        if (cell.bonus === "twoW") {
          doubbleWord += 1;
        }
        if (cell.bonus === "threeW") {
          tripleWord += 1;
        }
      }
      wordPoints += cellPoints;
    });

    for (let j = 0; j < doubbleWord; j++) {
      wordPoints = wordPoints * 2;
    }
    for (let j = 0; j < tripleWord; j++) {
      wordPoints = wordPoints * 3;
    }
    points += wordPoints;
  }

  return points;
};

export const makeLockedNeighborsUnclickable = (newBoardCells) => {
  let lockedCellsWithTile = newBoardCells.filter((cell) => cell.tile && cell.locked);
  let lockedNeighbors = [];

  lockedCellsWithTile.forEach((cell) => {
    let newNeighbors = findNeighbors(newBoardCells, cell);
    newNeighbors.forEach((neighbor) => lockedNeighbors.push(neighbor));
    makeNeighborsUnclickable(newNeighbors);
  });

  return lockedNeighbors;
};

export const makeRoundCellsNeighborsUnclickable = (newBoardCells, roundCells) => {
  let roundNeighbors = [];

  roundCells.forEach((cell) => {
    let neighbors = findNeighbors(newBoardCells, cell);
    neighbors.forEach((neighbor) => {
      roundNeighbors.push(neighbor);
    });
  });
  makeNeighborsUnclickable(roundNeighbors);
};
