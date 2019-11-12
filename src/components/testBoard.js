// import React, { useState, useEffect } from "react";
// // import classNames from "classnames";

// import BoardCell from "./boardCell";

// import {
//   findNeighbors,
//   lockTilesWithLetter,
//   makeNeighborsClickable,
//   makeNeighborsUnclickable,
//   determineDirection,
//   makeRoundCellsNeighborsUnclickable,
//   moveTileToPlayerCells,
//   makeMainWordEdgesClickable,
//   findNeighborsDirection,
//   // getPoints,
//   executePoints,
//   makeLockedNeighborsUnclickable,
//   // findNeighborsDirection,
//   // findLockedNeighborsInRound,
//   shuffleTiles
// } from "../utils";

// import "./style/board.css";
// import { isRegExp } from "util";

// function createBoardCells() {
//   function BoardCell(index) {
//     let clickableTile = null;
//     if (index === 112) {
//       clickableTile = true;
//     } else clickableTile = false;
//     return {
//       index,
//       clickable: clickableTile,
//       tile: null
//     };
//   }

//   return Array(225)
//     .fill()
//     .map((_, i) => new BoardCell(i));
// }

// // function createActiveTiles() {
// //   return boardCells.filter(tile => !!tile.letter && !tile.locked);
// // }

// const Board = ({ startingBag }) => {
//   const [bag, setBag] = useState(startingBag);
//   const [boardCells, setBoardCells] = useState(createBoardCells);
//   const [playerCells, setPlayerCells] = useState(createPlayerCells);
//   const [activeTiles, setActiveTiles] = useState();
//   const [activeTile, setActiveTile] = useState(null);
//   const [roundCells, setRoundCells] = useState([]);

//   useEffect(() => {
//     // console.log(
//     //   "activeTiles",
//     //   boardCells
//     //     .filter(cell => !!cell.tile && !cell.locked)
//     //     .sort((a, b) => a.index - b.index)
//     //     .map(cell => cell.tile.letter)
//     //     .join("")
//     // );
//     setActiveTiles(boardCells.filter(tile => !!tile.letter && !tile.locked));
//   }, [boardCells]);

//   function drawTilesFromBag(numberOfTiles) {
//     if (bag.length === 0) return console.log("Game Over!") || {};
//     const newBag = [...bag];

//     const tiles = [];

//     for (let i = 0; i < numberOfTiles; i++) {
//       tiles.push(newBag.shift());
//     }

//     setBag(newBag);
//     return tiles;
//   }

//   function createPlayerCells() {
//     const tiles = drawTilesFromBag(7);

//     return Array(7)
//       .fill()
//       .map((_, i) => ({
//         index: i,
//         tile: tiles.pop()
//       }));
//   }

//   const moveTileToPlayerCells = (tile, playerCells) => {
//     let found = false;
//     setPlayerCells(
//       playerCells.map(playerCell => {
//         if (!found && !playerCell.tile) {
//           playerCell.tile = tile;
//           found = true;
//         }

//         return playerCell;
//       })
//     );
//   };

//   const findNeighborsDirection = (list, clickedCell) => {
//     let lockedNeighborsInRound = [];
//     let neighbors = [];

//     for (let i = 0; i < list.length; i++) {
//       if (list[i].index + 1 === clickedCell.index) {
//         neighbors = findLockedNeighborsInRound(list[i], -1);
//       }
//       if (list[i].index - 1 === clickedCell.index) {
//         neighbors = findLockedNeighborsInRound(list[i], 1);
//       }
//       if (list[i].index - 15 === clickedCell.index) {
//         neighbors = findLockedNeighborsInRound(list[i], 15);
//       }
//       if (list[i].index + 15 === clickedCell.index) {
//         neighbors = findLockedNeighborsInRound(list[i], -15);
//       }

//       neighbors.forEach(cell => {
//         lockedNeighborsInRound.push(cell);
//       });
//     }
//     // console.log(lockedNeighborsInRound, "locked neighbors in line");

//     return lockedNeighborsInRound;
//   };

//   const findCellsInRound = (newBoardCells, clickedCell) => {
//     // let newBoardCells = [...boardCells];
//     let newActiveCells = boardCells.filter(cell => !!cell.tile && !cell.locked);

//     let neighbors = findNeighbors(newBoardCells, clickedCell);
//     let lockedNeighbors = neighbors.filter(cell => cell.locked);

//     let moreLockedNeighbors = findNeighborsDirection(lockedNeighbors, clickedCell);

//     let newCellsInRound = [...roundCells, ...lockedNeighbors, ...moreLockedNeighbors, clickedCell];

//     setRoundCells(newCellsInRound);

//     return newCellsInRound;
//   };

//   const findLockedNeighborsInRound = (lockedNeighbor, velocity, lockedNeighbors) => {
//     let newBoardCells = [...boardCells];

//     if (!lockedNeighbors) {
//       lockedNeighbors = [];
//     }

//     let n = newBoardCells.find(cell => lockedNeighbor.index + velocity === cell.index);

//     if (n.locked) {
//       lockedNeighbors.push(n);
//       return findLockedNeighborsInRound(n, velocity, lockedNeighbors);
//     } else return lockedNeighbors;
//   };

//   const findUnlockedNeighborsInRound = (cellToCheck, velocity, neighbors) => {
//     let newBoardCells = [...boardCells];

//     if (!neighbors) {
//       neighbors = [];
//     }

//     let n = newBoardCells.find(cell => cellToCheck.index + velocity === cell.index);

//     if (n.tile) {
//       neighbors.push(n);
//       return findUnlockedNeighborsInRound(n, velocity, neighbors);
//     } else return neighbors;
//   };

//   const findLockedNeighbors = (lockedNeighbors, direction) => {
//     let allLockedCells = [];
//     let newBoardCells = [...boardCells];
//     let newActiveCells = newBoardCells.filter(cell => !!cell.tile && !cell.locked);
//     let sortedActiveCells = newActiveCells.sort((a, b) => a.index - b.index);
//     console.log("active cells", sortedActiveCells);

//     if (direction === "horizontal" || direction === "no") {
//       lockedNeighbors.forEach(cell => {
//         if (cell.index === sortedActiveCells[0].index + sortedActiveCells.length) {
//           let rightLockedNeighbors = findLockedNeighborsInRound(cell, +1);
//           rightLockedNeighbors.forEach(neighbor => {
//             allLockedCells.push(neighbor);
//           });
//           // console.log("right locked neig", rightLockedNeighbors);
//         }
//         if (cell.index === sortedActiveCells[0].index - 1) {
//           let leftLockedNeighbors = findLockedNeighborsInRound(cell, -1);
//           leftLockedNeighbors.forEach(neighbor => {
//             allLockedCells.push(neighbor);
//           });
//           // console.log("left locked neig", leftLockedNeighbors);
//         }
//       });
//     }

//     if (direction === "vertical" || direction === "no") {
//       lockedNeighbors.forEach(cell => {
//         if (cell.index === sortedActiveCells[0].index + sortedActiveCells.length) {
//           let upLockedNeighbors = findLockedNeighborsInRound(cell, -15);
//           upLockedNeighbors.forEach(neighbor => {
//             allLockedCells.push(neighbor);
//           });
//           // console.log("up locked neig", upLockedNeighbors);
//         }
//         if (cell.index === sortedActiveCells[0].index + 15) {
//           let downLockedNeighbors = findLockedNeighborsInRound(cell, +15);
//           downLockedNeighbors.forEach(neighbor => {
//             allLockedCells.push(neighbor);
//           });
//           // console.log("down locked neig", downLockedNeighbors);
//         }
//       });
//     }
//     return allLockedCells;
//   };

//   const makeMainWord = (roundCells = [], direction = "no", clickedCell) => {
//     let activeRoundCells = roundCells.filter(cell => !cell.locked);
//     let leftNeighborsToClickedCell = [];
//     let rightNeighborsToClickedCell = [];
//     let upNeighborsToClickedCell = [];
//     let downNeighborsToClickedCell = [];

//     if (direction === "horizontal") {
//       leftNeighborsToClickedCell = findUnlockedNeighborsInRound(clickedCell, -1);
//       rightNeighborsToClickedCell = findUnlockedNeighborsInRound(clickedCell, +1);
//     } else if (direction === "vertical") {
//       upNeighborsToClickedCell = findUnlockedNeighborsInRound(clickedCell, -15);
//       downNeighborsToClickedCell = findUnlockedNeighborsInRound(clickedCell, +15);
//     }

//     let mainWord = leftNeighborsToClickedCell.concat(
//       rightNeighborsToClickedCell,
//       upNeighborsToClickedCell,
//       downNeighborsToClickedCell
//     );
//     mainWord.push(clickedCell);

//     activeRoundCells.forEach(cell => {
//       let inMainWord = mainWord.find(n => n.index === cell.index);
//       if (!inMainWord) {
//         mainWord.push(cell);
//       }
//     });
//     mainWord.sort((a, b) => a.index - b.index);

//     console.log("main word");
//     mainWord.forEach(cell => console.log(cell.tile.letter));

//     return mainWord;
//   };

//   const makeMainWordEdgesClickable = (direction, mainWord) => {
//     let first = mainWord.shift();
//     let last = mainWord.pop();
//     let firstNeighbors = findNeighbors(boardCells, first);
//     let lastNeighbors = findNeighbors(boardCells, last);

//     let cellsToClickable = [];
//     if (direction === "horizontal") {
//       let firstNeighbor = firstNeighbors.find(cell => cell.index === first.index - 1);
//       let lastNeighbor = lastNeighbors.find(cell => cell.index === last.index + 1);
//       cellsToClickable.push(firstNeighbor, lastNeighbor);
//     } else if (direction === "vertical") {
//       let firstNeighbor = firstNeighbors.find(cell => cell.index === first.index - 15);
//       let lastNeighbor = lastNeighbors.find(cell => cell.index === last.index + 15);
//       cellsToClickable.push(firstNeighbor, lastNeighbor);
//     }
//     makeNeighborsClickable(cellsToClickable);
//   };

//   // const findLastCellsNeighbor = (lockedCell, clickedCell) => {
//   //   if (lockedCell.index === clickedCell.index - 1) {
//   //     let lockedNeighborNeighbors = findLockedNeighborsInRound(lockedCell, -1);
//   //     let lastCell = lockedNeighborNeighbors.pop();
//   //     let lastCellNeighbors = findNeighbors(boardCells, lastCell);
//   //     let lastCellNeighbor = lastCellNeighbors.filter(
//   //       lockedCell => lockedCell.index === lastCell.index - 1
//   //     );
//   //     return lastCellNeighbor;
//   //   }
//   //   if (lockedCell.index === clickedCell.index + 1) {
//   //     let lockedNeighborNeighbors = findLockedNeighborsInRound(lockedCell, +1);
//   //     let lastCell = lockedNeighborNeighbors.pop();
//   //     let lastCellNeighbors = findNeighbors(boardCells, lastCell);
//   //     let lastCellNeighbor = lastCellNeighbors.filter(
//   //       lockedCell => lockedCell.index === lastCell.index + 1
//   //     );
//   //     return lastCellNeighbor;
//   //   }
//   //   if (lockedCell.index === clickedCell.index - 15) {
//   //     let lockedNeighborNeighbors = findLockedNeighborsInRound(lockedCell, -15);
//   //     let lastCell = lockedNeighborNeighbors.pop();
//   //     let lastCellNeighbors = findNeighbors(boardCells, lastCell);
//   //     let lastCellNeighbor = lastCellNeighbors.filter(
//   //       lockedCell => lockedCell.index === lastCell.index - 15
//   //     );
//   //     return lastCellNeighbor;
//   //   }
//   //   if (lockedCell.index === clickedCell.index + 15) {
//   //     let lockedNeighborNeighbors = findLockedNeighborsInRound(lockedCell, +15);
//   //     let lastCell = lockedNeighborNeighbors.pop();
//   //     let lastCellNeighbors = findNeighbors(boardCells, lastCell);
//   //     let lastCellNeighbor = lastCellNeighbors.filter(
//   //       lockedCell => lockedCell.index === lastCell.index + 15
//   //     );
//   //     return lastCellNeighbor;
//   //   }
//   // };

//   const makeClickedCellEdgesClickable = (neighbors, clickedCell) => {
//     let lockedNeighbors = neighbors.filter(cell => cell.locked);
//     let unlockedNeighbors = neighbors.filter(cell => !cell.locked);
//     let neighborsToClickable = [];
//     let cellNeighbors = [];

//     unlockedNeighbors.forEach(cell => {
//       neighborsToClickable.push(cell);
//     });

//     lockedNeighbors.forEach(cell => {
//       // console.log(lockedNeighbors);
//       // console.log(cell.tile.letter);
//       if (cell.index === clickedCell.index - 1) {
//         cellNeighbors = findLockedNeighborsInRound(cell, -1);
//         if (cellNeighbors.length > 0) {
//           let last = cellNeighbors.pop();
//           // console.log("last", last.tile.letter);
//           let lastCellNeighbors = findNeighbors(boardCells, last);
//           let cellToClick = lastCellNeighbors.find(cell => cell.index === last.index - 1);
//           neighborsToClickable.push(cellToClick);
//         } else {
//           let lastCellNeighbors = findNeighbors(boardCells, cell);
//           let cellToClick = lastCellNeighbors.find(neighbor => neighbor.index === cell.index - 1);
//           neighborsToClickable.push(cellToClick);
//         }
//       }
//       if (cell.index === clickedCell.index + 1) {
//         cellNeighbors = findLockedNeighborsInRound(cell, +1);
//         if (cellNeighbors.length > 0) {
//           let last = cellNeighbors.pop();
//           // console.log("last", last.tile.letter);
//           let lastCellNeighbors = findNeighbors(boardCells, last);
//           let cellToClick = lastCellNeighbors.find(cell => cell.index === last.index + 1);
//           neighborsToClickable.push(cellToClick);
//         } else {
//           let lastCellNeighbors = findNeighbors(boardCells, cell);
//           let cellToClick = lastCellNeighbors.find(neighbor => neighbor.index === cell.index + 1);
//           neighborsToClickable.push(cellToClick);
//         }
//       }
//       if (cell.index === clickedCell.index - 15) {
//         cellNeighbors = findLockedNeighborsInRound(cell, -15);
//         if (cellNeighbors.length > 0) {
//           let last = cellNeighbors.pop();
//           // console.log("last", last.tile.letter);
//           let lastCellNeighbors = findNeighbors(boardCells, last);
//           let cellToClick = lastCellNeighbors.find(cell => cell.index === last.index - 15);
//           neighborsToClickable.push(cellToClick);
//         } else {
//           let lastCellNeighbors = findNeighbors(boardCells, cell);
//           let cellToClick = lastCellNeighbors.find(neighbor => neighbor.index === cell.index - 15);
//           neighborsToClickable.push(cellToClick);
//         }
//       }
//       if (cell.index === clickedCell.index + 15) {
//         cellNeighbors = findLockedNeighborsInRound(cell, +15);
//         if (cellNeighbors.length > 0) {
//           let last = cellNeighbors.pop();
//           // console.log("last", last.tile.letter);
//           let lastCellNeighbors = findNeighbors(boardCells, last);
//           let cellToClick = lastCellNeighbors.find(cell => cell.index === last.index + 15);
//           neighborsToClickable.push(cellToClick);
//         } else {
//           let lastCellNeighbors = findNeighbors(boardCells, cell);
//           let cellToClick = lastCellNeighbors.find(neighbor => neighbor.index === cell.index + 15);
//           neighborsToClickable.push(cellToClick);
//         }
//       }
//     });
//     makeNeighborsClickable(neighborsToClickable);
//   };

//   const makeClickedCellLockedNeighborsClickable = (lockedNeighbors, clickedCell) => {
//     let newBoardCells = [...boardCells];
//     let neighborsToClickable = [];

//     lockedNeighbors.forEach(cell => {
//       if (cell.index + 1 === clickedCell.index) {
//         // console.log("left Neighbor");
//         let cellNeighbor = newBoardCells.find(neighbor => neighbor.index === cell.index - 1);
//         neighborsToClickable.push(cellNeighbor);
//         // let cellNeighbors = findLockedNeighborsInRound(cellNeighbor, -1)
//         // cellNeighbors.forEach(neighbor => neighborsToClickable.push(neighbor))
//       }
//       if (cell.index - 1 === clickedCell.index) {
//         // console.log("right Neighbor");
//         let cellNeighbor = newBoardCells.find(neighbor => neighbor.index === cell.index + 1);
//         neighborsToClickable.push(cellNeighbor);
//       }
//       if (cell.index + 15 === clickedCell.index) {
//         // console.log("up Neighbor");
//         let cellNeighbor = newBoardCells.find(neighbor => neighbor.index === cell.index - 15);
//         neighborsToClickable.push(cellNeighbor);
//       }
//       if (cell.index - 15 === clickedCell.index) {
//         // console.log("down Neighbor");
//         let cellNeighbor = newBoardCells.find(neighbor => neighbor.index === cell.index + 15);
//         neighborsToClickable.push(cellNeighbor);
//       }
//     });

//     makeNeighborsClickable(neighborsToClickable);
//   };

//   // const determineMainWordDirection = () => {
//   const determineDirection = () => {
//     const activeCells = boardCells
//       .filter(cell => !!cell.tile && !cell.locked)
//       .sort((a, b) => a.index - b.index);

//     if (activeCells.length < 2) return "no";

//     const first = activeCells.shift();
//     const last = activeCells.pop();
//     const distance = Math.abs(first.index - last.index);

//     if (distance < 15) return "horizontal";
//     else return "vertical";
//   };

//   const cellClick = clickedCell => {
//     if (clickedCell.locked || clickedCell.clickable === false) {
//       return console.log("NOPE");
//     }

//     // cell has tile, move tile to playercells
//     if (clickedCell.tile) {
//       let newBoardCells = [...boardCells];

//       let neighbors = findNeighbors(newBoardCells, clickedCell);
//       makeNeighborsUnclickable(neighbors);

//       moveTileToPlayerCells(clickedCell.tile);
//       clickedCell.tile = null;
//       setBoardCells(newBoardCells);
//     }

//     // have an active tile and clicked cell have not tile
//     if (activeTile && !clickedCell.tile) {
//       let newBoardCells = [...boardCells];

//       //put activeTile on clicked cell
//       clickedCell.tile = activeTile;
//       let newActiveCells = boardCells.filter(cell => !!cell.tile && !cell.locked);

//       makeLockedNeighborsUnclickable(boardCells);

//       let clickedCellNeighbors = findNeighbors(newBoardCells, clickedCell);
//       let lockedNeighbors = clickedCellNeighbors.filter(cell => cell.locked);
//       let roundCells = findCellsInRound(newBoardCells, clickedCell);
//       let direction = determineDirection();
//       let mainWord = makeMainWord(roundCells, direction, clickedCell);

//       makeRoundCellsNeighborsUnclickable(newBoardCells, roundCells);

//       if (newActiveCells.length > 1) {
//         makeMainWordEdgesClickable(direction, mainWord);
//       } else {
//         makeClickedCellEdgesClickable(clickedCellNeighbors, clickedCell);
//         makeClickedCellLockedNeighborsClickable(lockedNeighbors, clickedCell);
//       }

//       setBoardCells(newBoardCells);
//       setPlayerCells(
//         playerCells.map(cell => {
//           if (cell.tile && cell.tile.id === activeTile.id) cell.tile = null;

//           return cell;
//         })
//       );
//       setActiveTile(null);
//     }

//     let points = executePoints(roundCells);
//     console.log("Points", points);
//   };

//   const playerCellClick = ({ tile }) => {
//     if (activeTile) {
//       moveTileToPlayerCells(activeTile);
//       setActiveTile(null);
//     }

//     if (tile) {
//       setActiveTile(tile);
//     }
//   };

//   const drawTiles = () => {
//     const numberOfCellsWithoutTiles = playerCells.filter(cell => !cell.tile).length;

//     if (numberOfCellsWithoutTiles === 0) return;

//     const newTiles = drawTilesFromBag(numberOfCellsWithoutTiles);

//     const newPlayerCells = playerCells.map(cell => {
//       if (!cell.tile) {
//         cell.tile = newTiles.pop();
//       }

//       return cell;
//     });

//     setPlayerCells(newPlayerCells);
//   };

//   const lockWord = () => {
//     const newTiles = lockTilesWithLetter(boardCells);
//     setBoardCells(newTiles);
//   };

//   const ShufflePlayerTiles = () => {
//     let newPlayerCells = [...playerCells];
//     let newBag = [...bag];

//     newPlayerCells.forEach(cell => newBag.push(cell.tile));
//     setBag(newBag);
//     newPlayerCells.forEach(cell => (cell.tile = null));
//     setPlayerCells(newPlayerCells);
//     drawTiles();
//   };

//   const execute = () => {
//     lockWord();
//     drawTiles();
//     setRoundCells([]);
//   };

//   const isPlayerCellActive = ({ tile }) => activeTile && tile && tile.id === activeTile.id;

//   return (
//     <div className="board">
//       <div className="cells">
//         {boardCells.map(cell => (
//           <BoardCell cell={cell} key={cell.index} onClick={() => cellClick(cell)}>
//             {cell.tile && (
//               <div className="tile">
//                 <div className="tileLetter">{cell.tile.letter}</div>
//                 <div className="tilePoints">{cell.tile.points}</div>
//               </div>
//             )}
//           </BoardCell>
//         ))}
//       </div>
//       <div className="playerCells">
//         {playerCells.map(playerCell => (
//           <div
//             // className={classNames("playerCell", { active: isPlayerCellActive(playerCell) })}
//             key={playerCell.index}
//             onClick={() => playerCellClick(playerCell)}
//           >
//             {playerCell.tile && <div className="tile">{playerCell.tile.letter}</div>}
//           </div>
//         ))}
//       </div>
//       <div className="stuff">
//         <div className="activeTiles">
//           <p>Active Tile</p>
//           <p>{activeTile && activeTile.letter}</p>
//           <p />
//           <p>Points</p>
//           {/* <p>{executePoints()}</p> */}
//         </div>
//         <div className="shuffleButton" onClick={execute}>
//           <span>EXECUTE</span>
//         </div>
//         <div className="executeButton" onClick={ShufflePlayerTiles}>
//           <span>SHUFFLE</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Board;
