import { determineDirection, makeMainWord } from "./round";
import { createBoardCells, createBag, createPlayerCells, drawTilesFromBag, lockTilesWithLetter, executePoints } from "./utils";
import dictionary from "./dictionary.json";

let boardCells = [];
let bag = [];
let players = [];
let activePlayer = null;

function gamifyPlayers(inputPlayers) {
  for (let i = 0; i < inputPlayers.length; i++) {
    inputPlayers[i].id = i + 1;
  }
  activePlayer = inputPlayers[0];
  return inputPlayers.map((player) => {
    player.playerCells = createPlayerCells(bag);
    player.playerCells.forEach((cell) => {
      cell.tile.color = player.color;
    });
    return player;
  });
}

export const setup = (inputPlayers) => {
  let game = {};
  if (boardCells.length === 0) {
    boardCells = createBoardCells();
  }
  bag = createBag();
  game.boardCells = boardCells;
  game.bag = bag;

  if (inputPlayers) {
    players = inputPlayers;
    game.players = gamifyPlayers(inputPlayers);
  }
  game.activePlayer = activePlayer;

  return game;
};

export function checkIfTilesLeftInBag(bag) {
  if (bag.length === 0) {
    return false;
  } else return true;
}

const lockWord = () => {
  lockTilesWithLetter(boardCells);
};

const drawTiles = () => {
  if (bag.length === 0) return;
  const numberOfCellsWithoutTiles = activePlayer.playerCells.filter((cell) => !cell.tile).length;

  if (numberOfCellsWithoutTiles === 0) return;

  let newTiles = drawTilesFromBag(bag, numberOfCellsWithoutTiles);
  newTiles.forEach((tile) => (tile.color = activePlayer.color));

  activePlayer.playerCells = activePlayer.playerCells.map((cell) => {
    if (!cell.tile) {
      cell.tile = newTiles.pop();
    }

    return cell;
  });
};

const changeActivePlayer = () => {
  if (activePlayer.id === players.length) {
    activePlayer = players[0];
    activePlayer.active = true;
  } else {
    activePlayer = players.find((player) => player.id === activePlayer.id + 1);
    activePlayer.active = true;
  }
};

const findNeighborsInWord = (notMainWord, cellToCheck, velocity, neighbors) => {
  if (!neighbors) {
    neighbors = [];
  }

  let n = notMainWord.find((cell) => cellToCheck.index + velocity === cell.index);

  if (n && n.tile) {
    neighbors.push(n);
    return findNeighborsInWord(notMainWord, n, velocity, neighbors);
  } else return neighbors;
};

const findAllWords = (roundCells, direction) => {
  let words = [];
  let mainWord = makeMainWord(roundCells, direction);
  if (mainWord.length > 1) {
    words.push(mainWord);
  }
  let notMainWord = roundCells.filter((cell) => {
    return !mainWord.includes(cell);
  });

  let activeRoundCells = roundCells.filter((cell) => {
    return !cell.locked;
  });

  activeRoundCells.forEach((cell) => {
    if (direction === "vertical" || direction === "no") {
      let leftNeighbors = findNeighborsInWord(notMainWord, cell, -1);
      let rightNeighbors = findNeighborsInWord(notMainWord, cell, +1);
      if (leftNeighbors.length > 0 || rightNeighbors.length > 0) {
        let word = [];
        leftNeighbors.forEach((l) => word.push(l));
        rightNeighbors.forEach((r) => word.push(r));
        word.push(cell);
        words.push(word);
      }
    }
    if (direction === "horizontal" || direction === "no") {
      let upNeighbors = findNeighborsInWord(notMainWord, cell, -15);
      let downNeighbors = findNeighborsInWord(notMainWord, cell, +15);
      if (upNeighbors.length > 0 || downNeighbors.length > 0) {
        let word = [];
        upNeighbors.forEach((u) => word.push(u));
        downNeighbors.forEach((d) => word.push(d));
        word.push(cell);
        words.push(word);
      }
    }
  });
  return words;
};

const findWordsInRoundCells = (roundCells) => {
  let direction = determineDirection();
  let sortedRoundCells = roundCells.sort((a, b) => {
    return a.id - b.id;
  });
  let words = findAllWords(sortedRoundCells, direction);
  return words;
};

export const shuffleTiles = (playerCells) => {
  let tilesToChange = playerCells.filter((cell) => cell.tile.shuffleSelected);

  tilesToChange.forEach((cell) => {
    bag.push(cell.tile);
    cell.tile = null;
  });
  let numOfTiles = tilesToChange.length;

  let newTiles = drawTilesFromBag(bag, numOfTiles);
  newTiles.forEach((tile) => (tile.color = activePlayer.color));

  activePlayer.playerCells = activePlayer.playerCells.map((cell) => {
    if (!cell.tile) {
      cell.tile = newTiles.pop();
    }

    return cell;
  });
  activePlayer.active = false;
  changeActivePlayer();
  return boardCells;
};

const aproveWords = (words) => {
  let num = 0;
  return words.every((word) => {
    num = num + 1;
    let checkWord = word.sort((a, b) => a.index - b.index);
    let stringWord = "";
    for (let l = 0; l < word.length; l++) {
      let letter = checkWord[l].tile.letter;
      stringWord += letter;
    }
    console.log(stringWord);
    let findInDic = Boolean(dictionary[stringWord]);
    return findInDic;
  });
};

export function execute(roundCells, onGameOver) {
  let words = findWordsInRoundCells(roundCells);
  console.log("Number of words", words.length);
  let wordsApproved = aproveWords(words);
  let wordPoints = 0;

  if (wordsApproved) {
    wordPoints = executePoints(words);
    lockWord();
    drawTiles();

    activePlayer.points += wordPoints;
    let noTilesLeft = activePlayer.playerCells.find((cell) => cell.tile);
    console.log("...............");
    if (!noTilesLeft) {
      const sortedPlayers = players.sort((a, b) => b.points - a.points);
      onGameOver(sortedPlayers);
    } else {
      activePlayer.active = false;
      changeActivePlayer();

      return boardCells;
    }
  } else {
    return console.log("Word not approved");
  }
}
