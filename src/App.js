
import { useState } from 'react';
import './App.css';




function Square({ value, onSquareClick }) {
  // this function helps to return the clicked state it will take on square click func as prop and value of bioard or bliock no of board to be fix in time 
  return ( <button className="square" onClick={onSquareClick}>{value}</button>
  );
}


function Board({xIsNext,squares,onPlay }) {
  function handleClick(i) {
    
    if ( Calwinner(squares) || squares[i] ) {
      return; // check if square is not null it will not allow tp obverride your past move 
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X"; // condition for x or 0 
    }
    else {
      nextSquares[i] = "0";
    }

  onPlay(nextSquares);
  }
  const winner = Calwinner(squares)
  let status;
  if (winner) {
    status = 'Winner :' + winner;
  }
  else {
    status = 'Next player :' + ( xIsNext? 'X' : '0');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </>
  )
};

// To calculate out the winner 

function Calwinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default function Game()
{
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares)
  {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }


  // function jumpTo(nextmove)
  // {
  //   // ToDO
  // }
  //  const moves=history.map(squares,move) =>{ // errror 
    

  //  }

return (
  <>
 <div className="game">
  <div className="game-board">
    <Board  xIsNext={xIsNext}  squares={currentSquares} onPlay={handlePlay}/>
  </div>
  <div className="game-info">
    <ol> {/*todos */}</ol>
  </div>
 </div>
  </>
)
}


