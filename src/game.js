import {
  createBoardCells,
  createBag,
  createPlayerCells,
  drawTilesFromBag,
  lockTilesWithLetter
} from "./utils";

let boardCells = createBoardCells();
let bag = createBag();
// let playerCells = createPlayerCells(bag);
let roundCells = [];
let numberOfPlayers = 4;
let players = [];
let activePlayer = null;

const createPlayers = () => {
  for (let i = 1; i <= numberOfPlayers; i++) {
    let player = {};
    player.id = i;
    player.playerCells = createPlayerCells(bag);
    players.push(player);
  }
  activePlayer = players.find(player => player.id === 1);
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

// export function checkIfTilesLeftInBag(bag) {
//   if (bag.length === 0) {
//     return false;
//   } else return true;
// }

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
    activePlayer = players.shift();
  } else {
    activePlayer = players.find(player => player.id === activePlayer.id + 1);
  }
};

export function execute() {
  console.log("execute");
  lockWord();
  drawTiles();
  console.log(bag);
  if (activePlayer.playerCells.length === 0) {
    console.log("GAME OVER!!!");
  }
  roundCells = [];
  changeActivePlayer();
}

// export const ShufflePlayerTiles = () => {
//   player.playerCells.forEach(cell => bag.push(cell.tile));
//   player.playerCells.forEach(cell => (cell.tile = null));
//   drawTiles();
// };
