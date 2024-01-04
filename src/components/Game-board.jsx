import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard(){
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClick (rowIndex, columnIndex, symbol){
    setGameBoard(prevGameBoard => {
      const updatedGameBoard = [...gameBoard.map(nestedArray => [...nestedArray])];
      updatedGameBoard[rowIndex][columnIndex] = symbol;
      return updatedGameBoard;
    });
  }
  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
      <ol>
        {row.map((symbol, colIndex) => <li key={colIndex}><button onClick={() => handleClick(rowIndex, colIndex, 'X')}>{symbol}</button></li>)}
      </ol>
    </li>)}
  </ol>
}
