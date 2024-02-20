import { useState } from "react";

function Square({value, clickSquare}) {
  
  return(
  <button onClick={clickSquare} className="square">{value}</button>
  )}
function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNext,setIsNext] = useState(false)
  function handleClick(i) {
    if(calculateWinner[squares] || squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(isNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O"
    }
    setIsNext(!isNext);
    setSquares(nextSquares);
  }
  const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (isNext ? 'X' : 'O');
    }
  return (
    <>
       <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} clickSquare={() => handleClick(0)}/>
        <Square value={squares[1]} clickSquare={() => handleClick(1)}/>
        <Square value={squares[2]} clickSquare={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} clickSquare={() => handleClick(3)}/>
        <Square value={squares[4]} clickSquare={() => handleClick(4)}/>
        <Square value={squares[5]} clickSquare={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} clickSquare={() => handleClick(6)}/>
        <Square value={squares[7]} clickSquare={() => handleClick(7)}/>
        <Square value={squares[8]} clickSquare={() => handleClick(8)}/>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Board;
export {Square,calculateWinner};
