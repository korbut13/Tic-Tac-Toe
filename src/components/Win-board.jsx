export default function WinBoard({winner, handleReplay}){
  return <div id="game-over">
    <h2>Game over!</h2>
    <p>{winner ? `${winner} won!` : `It's a draw!`}</p>
    <button onClick={handleReplay}>Replay</button>
  </div>
}
