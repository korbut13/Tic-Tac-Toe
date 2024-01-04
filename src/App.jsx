import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Game-board";
import Log from "./components/Log";

function derivedActivePlayer(gameTurns){
  let prevPlayer = gameTurns[0].player;
  let nextPlayer = prevPlayer === 'X' ? 'O' : 'X';
  return nextPlayer;
}

function App() {
const [gameTurns, setGameTurns] = useState([]);

let activePlayer = 'X';
if(gameTurns.length > 0) activePlayer = derivedActivePlayer(gameTurns);

function handleTurn(rowIndex, columnIndex, playerSymbol){
  setGameTurns(turns => {
    const updatedTurns = [{square: {row:rowIndex, col:columnIndex}, player:playerSymbol}, ...turns];
    return updatedTurns;
  })
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard activePlayer={activePlayer} gameTurns={gameTurns} handleTurn={handleTurn}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
