// import React from "react";
// import StartWindow from "./components/startWindow";'

import {
  createBoardCells,
  createBag,
  createPlayerCells,
  drawTilesFromBag,
  lockTilesWithLetter,
  executePoints
} from "./utils";

let boardCells = createBoardCells();
let bag = createBag();
// let playerCells = createPlayerCells(bag);
// let roundCells = [];
let numberOfPlayers = 4;
let players = [];
let activePlayer = null;

// export function checkStartWindow(startWindowActive) {
//   if (startWindowActive && startWindowActive === true) {
//     return <StartWindow startWindowActive={true} />;
//   } else {
//     return <div></div>;
//   }
// }

const createPlayers = () => {
  for (let i = 1; i <= numberOfPlayers; i++) {
    let player = {};
    player.id = i;
    player.name = "Player_" + player.id;
    player.playerCells = createPlayerCells(bag);
    player.points = 0;
    players.push(player);
  }
  activePlayer = players.find(player => player.id === 1);
  activePlayer.active = true;
  console.log(players);
};

export const setup = () => {
  let game = {};
  if (players.length === 0) {
    createPlayers();
  }
  game.boardCells = boardCells;
  game.bag = bag;
  game.players = players;
  game.activePlayer = activePlayer;

  // console.log("active player", activePlayer);

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

  activePlayer.playerCells = activePlayer.playerCells.map(cell => {
    if (!cell.tile) {
      cell.tile = newTiles.pop();
    }

    return cell;
  });
  // activePlayer.playerCells.forEach(cell => console.log(cell.letter));
};

const changeActivePlayer = () => {
  if (activePlayer.id === numberOfPlayers) {
    activePlayer = players[0];
    activePlayer.active = true;
  } else {
    activePlayer = players.find(player => player.id === activePlayer.id + 1);
    activePlayer.active = true;
  }
};

export function execute(roundCells) {
  // let newRoundCells = roundCells.filter(cell => cell.tile);
  console.log("execute");
  lockWord();
  drawTiles();
  console.log("bag", bag);
  let wordPoints = executePoints(roundCells);
  activePlayer.points += wordPoints;
  let noTilesLeft = activePlayer.playerCells.find(cell => cell.tile);
  if (!noTilesLeft) {
    console.log("GAME OVER!!!");
    let sortedPlayers = players.sort((a, b) => {
      return a.points - b.points;
    });
    let winner = sortedPlayers.pop();
    console.log("winner", winner.name, winner.points);
    alert("winner", winner);
  } else {
    activePlayer.active = false;
    changeActivePlayer();
  }
}

// export const ShufflePlayerTiles = () => {
//   player.playerCells.forEach(cell => bag.push(cell.tile));
//   player.playerCells.forEach(cell => (cell.tile = null));
//   drawTiles();
// };
