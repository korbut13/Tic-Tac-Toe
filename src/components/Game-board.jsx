export default function GameBoard({gameBoard, handleTurn}){
  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
      <ol>
        {row.map((symbol, colIndex) =>
        <li key={colIndex}>
          <button onClick={() =>handleTurn(rowIndex, colIndex)} disabled={symbol !==null}>{symbol}</button>
        </li>)}
      </ol>
    </li>)}
  </ol>
}
