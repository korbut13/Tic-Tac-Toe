export default function WinBoard({winner}){
  return <div id="game-over">
    <h2>Game over!</h2>
    <p>{winner} won!</p>
    <button>Replay</button>
  </div>
}
