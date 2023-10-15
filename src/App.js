import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Square({ value , onSquareClick }) {
 // this function helps to return the clicked state it will take on square click func as prop and value of bioard or bliock no of board to be fix in time 
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // array that will hold the placde or values of our board 
  const[xisNext,setXIsNext]=useState(true); // flag for turn of user by default it is set to X 

  function handleClick(i) {
    const nextSquares = squares.slice();
    if(squares[i])
    {
      return; // check if square is not null it wwill not allow tp obverride your past move 
    }
    if(xisNext==true)
    {
      nextSquares[i] = "X"; // condition for x or 0 
    }
    else{
      nextSquares[i]="0";
    }
 
    setSquares(nextSquares);
    setXIsNext(!xisNext); // at second turn we are negotating the flag which was initially true
  }
  
  return (
    <>
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

