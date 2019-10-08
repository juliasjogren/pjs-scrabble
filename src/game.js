// import React from "react";
// import StartWindow from "./components/startWindow";'

import { findPlayers } from "./components/gamePreparation";
import { determineDirection, makeMainWord } from "./round";

import {
  createBoardCells,
  createBag,
  createPlayerCells,
  drawTilesFromBag,
  lockTilesWithLetter,
  executePoints
} from "./utils";
import GameOver from "./components/gameOver";

let boardCells = [];
let bag = [];
let players = [];
let activePlayer = null;

function gamifyPlayers(inputPlayers) {
  console.log("inputplayers", inputPlayers);
  activePlayer = inputPlayers[0];
  return inputPlayers.map(player => {
    player.playerCells = createPlayerCells(bag);
    console.log("playercells", player.playerCells);
    player.playerCells.forEach(cell => {
      cell.tile.color = player.color;
    });
    // player.playerCells.forEach(cell => console.log(cell.tile.color));
    return player;
  });
}

export const setup = inputPlayers => {
  console.log("im in setup");
  let game = {};
  boardCells = createBoardCells();
  bag = createBag();
  console.log("bag", bag);
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
  const numberOfCellsWithoutTiles = activePlayer.playerCells.filter(cell => !cell.tile).length;
  if (numberOfCellsWithoutTiles === 0) return;

  let newTiles = drawTilesFromBag(bag, numberOfCellsWithoutTiles);
  newTiles.forEach(tile => (tile.color = activePlayer.color));
  console.log("new tiles", newTiles);
  newTiles.forEach(tile => console.log(tile.color));

  activePlayer.playerCells = activePlayer.playerCells.map(cell => {
    if (!cell.tile) {
      cell.tile = newTiles.pop();
    }

    return cell;
  });
  // activePlayer.playerCells.forEach(cell => console.log(cell.letter));
};

const changeActivePlayer = () => {
  // console.log("activePlayer", activePlayer);
  // console.log("Players", players);
  if (activePlayer.id === players.length) {
    activePlayer = players[0];
    activePlayer.active = true;
  } else {
    activePlayer = players.find(player => player.id === activePlayer.id + 1);
    activePlayer.active = true;
  }
};

const findNeighborsInWord = (notMainWord, cellToCheck, velocity, neighbors) => {
  if (!neighbors) {
    neighbors = [];
  }

  let n = notMainWord.find(cell => cellToCheck.index + velocity === cell.index);

  if (n && n.tile) {
    neighbors.push(n);
    return findNeighborsInWord(notMainWord, n, velocity, neighbors);
  } else return neighbors;
};

const findAllWords = (roundCells, direction) => {
  let words = [];
  let mainWord = makeMainWord(roundCells, direction);
  words.push(mainWord);

  let notMainWord = roundCells.filter(cell => {
    return !mainWord.includes(cell);
  });

  mainWord.forEach(cell => {
    if (direction === "vertical") {
      let leftNeighbors = findNeighborsInWord(notMainWord, cell, -1);
      let rightNeighbors = findNeighborsInWord(notMainWord, cell, +1);
      if (leftNeighbors.length > 0 || rightNeighbors.length > 0) {
        let word = [];
        leftNeighbors.forEach(l => word.push(l));
        rightNeighbors.forEach(r => word.push(r));
        word.push(cell);
        words.push(word);
      }
    }
    if (direction === "horizontal") {
      let upNeighbors = findNeighborsInWord(notMainWord, cell, -15);
      let downNeighbors = findNeighborsInWord(notMainWord, cell, +15);
      if (upNeighbors.length > 0 || downNeighbors.length > 0) {
        let word = [];
        upNeighbors.forEach(u => word.push(u));
        downNeighbors.forEach(d => word.push(d));
        word.push(cell);
        words.push(word);
      }
    }
  });
  return words;
};

const findWordsInRoundCells = roundCells => {
  let direction = determineDirection();
  console.log("findWordsInRoundCells direction", direction);
  let sortedRoundCells = roundCells.sort((a, b) => {
    return a.id - b.id;
  });
  let words = findAllWords(sortedRoundCells, direction);
  return words;
};

export function execute(roundCells, onGameOver) {
  let words = findWordsInRoundCells(roundCells);
  words.forEach(word => {
    console.log("word");
    word.forEach(cell => console.log(cell.tile.letter));
  });

  let wordsApproved = true;
  console.log("execute");

  if (wordsApproved) {
    lockWord();
    drawTiles();

    let wordPoints = executePoints(roundCells);
    activePlayer.points += wordPoints;

    let noTilesLeft = activePlayer.playerCells.find(cell => cell.tile);
    // if (!noTilesLeft) {
    if (noTilesLeft) {
      const sortedPlayers = players.sort((a, b) => b.points - a.points);
      onGameOver(sortedPlayers);
    } else {
      activePlayer.active = false;
      changeActivePlayer();
    }
  } else {
    return console.log("Word not approved");
  }
}

// export const ShufflePlayerTiles = () => {
//   player.playerCells.forEach(cell => bag.push(cell.tile));
//   player.playerCells.forEach(cell => (cell.tile = null));
//   drawTiles();
// };
