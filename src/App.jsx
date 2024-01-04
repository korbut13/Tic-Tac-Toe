import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Game-board";
import Log from "./components/Log";
import WinBoard from "./components/Win-board";
import {WINNING_COMBINATIONS} from './winning-combinations';

const PLAYERS = {
  'X' : 'Player 1',
  'O': 'Player 2'
};

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveGameBoard(gameTurns){
  const gameBoard = [...INITIAL_GAMEBOARD.map(array => [...array])];
  for(const turn of gameTurns){
    const {row, col} = turn.square;
    const {player:symbol} = turn;
    gameBoard[row][col] = symbol;
  };
  return gameBoard;
}

function derivedActivePlayer(gameTurns){
  let prevPlayer = gameTurns[0].player;
  let nextPlayer = prevPlayer === 'X' ? 'O' : 'X';
  return nextPlayer;
}

function deriveWinner(gameBoard, players){
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const seconsSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === seconsSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
     winner = players[firstSquareSymbol];
     break;
    };
  };
  return winner;
}

function App() {
const [gameTurns, setGameTurns] = useState([]);
const [players, setPlayers] = useState(PLAYERS);

let activePlayer = 'X';
if(gameTurns.length > 0) activePlayer = derivedActivePlayer(gameTurns);


const gameBoard = deriveGameBoard(gameTurns);
const winner = deriveWinner(gameBoard, players)
const hasDraw = gameTurns.length === 9 && !winner;

function handleTurn(rowIndex, columnIndex){
  setGameTurns(turns => {
    const updatedTurns = [{square: {row:rowIndex, col:columnIndex}, player:activePlayer}, ...turns];
    return updatedTurns;
  })
};

function handleEditingPlayerName(symbol, newName){
  setPlayers(prevPlayers => {
    return {
      ...prevPlayers,
      [symbol]:newName,
    };
  });
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} handleEditingPlayerName={handleEditingPlayerName}/>
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} handleEditingPlayerName={handleEditingPlayerName}/>
        </ol>
        <GameBoard gameBoard={gameBoard} handleTurn={handleTurn}/>
        {(winner || hasDraw) && <WinBoard winner={winner}  handleReplay={() => setGameTurns([])}/>}
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
