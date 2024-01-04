import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Game-board";
import Log from "./components/Log";
import WinBoard from "./components/Win-board";
import {WINNING_COMBINATIONS} from './winning-combinations';

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// function deriveGameBoard(){

// }

function derivedActivePlayer(gameTurns){
  let prevPlayer = gameTurns[0].player;
  let nextPlayer = prevPlayer === 'X' ? 'O' : 'X';
  return nextPlayer;
}

function App() {
const [gameTurns, setGameTurns] = useState([]);

let activePlayer = 'X';
if(gameTurns.length > 0) activePlayer = derivedActivePlayer(gameTurns);

let hasWinner;

const gameBoard = INITIAL_GAMEBOARD;
for(const turn of gameTurns){
  const rowIndex = turn.square.row;
  const columnIndex = turn.square.col;
  //const {row, col} = turn.square
  const symbol = turn.player
  gameBoard[rowIndex][columnIndex] =symbol;
}

function handleTurn(rowIndex, columnIndex){
  setGameTurns(turns => {
    const updatedTurns = [{square: {row:rowIndex, col:columnIndex}, player:activePlayer}, ...turns];
    return updatedTurns;
  })
}

for(const combination of WINNING_COMBINATIONS){
 const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
 const seconsSquareSymbol = gameBoard[combination[1].row][combination[1].column];
 const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

 if(firstSquareSymbol && firstSquareSymbol === seconsSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
  hasWinner = firstSquareSymbol;
 };
};

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard gameBoard={gameBoard} handleTurn={handleTurn}/>
        {hasWinner && <WinBoard winner={"WINNER"}/>}
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
