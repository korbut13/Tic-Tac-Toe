import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/Game-board";

function App() {
const [activePlayer, setActivePlayer] = useState('X');

function handleGameMove(){
  setActivePlayer(activePlayer => activePlayer=== 'X' ? 'O' : 'X');

}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard activePlayer={activePlayer} setActivePlayer={() => setActivePlayer(player => player === 'X' ? 'O' : 'X')}/>
      </div>
      LOG
    </main>
  )
}

export default App
