import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square()
{
  const[value,setvalue]=useState(null);

  function handleClick()
  {
    setvalue('X');
  }
  return(
    <button className="square" onClick={handleClick}>{value}</button>
  );
}

function Board() {
  return (
    <div className0='main-board'>

        <div className="board-row">
          <Square />
          <Square  />
          <Square  />
          </div>

        <div className="board-row">
        <Square />
        <Square />
        <Square />
          </div>

        <div className="board-row">
        <Square />
        <Square />
        <Square />
          </div>

    </div>
      
    
  );
}

export default Board;
