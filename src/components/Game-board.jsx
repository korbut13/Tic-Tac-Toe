const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({activePlayer, gameTurns, handleTurn}){
  const gameBoard = initialGameBoard;
  for(const turn of gameTurns){
    const rowIndex = turn.square.row;
    const columnIndex = turn.square.col;
    const symbol = turn.player
    gameBoard[rowIndex][columnIndex] =symbol;
  }
  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
      <ol>
        {row.map((symbol, colIndex) =>
        <li key={colIndex}>
          <button onClick={() =>handleTurn(rowIndex, colIndex, activePlayer)} disabled={symbol !==null}>{symbol}</button>
        </li>)}
      </ol>
    </li>)}
  </ol>
}
