import { useState } from "react";
import "./App.css"
import Board from "./components/Board";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function App() {

  const [history, setHistroy] = useState([
                {squares:Array(9).fill(null)}]);
  const [xIsNext, setxIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0)
  const calculateWinner = (squares)=>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let index = 0; index < lines.length; index++) {
      const [a,b,c] = lines[index];
      if(squares[a] && squares[a] === squares[b] &&squares[b]===squares[c]){
        return squares[a];
      }
    }
    return null;
}

const current = history[stepNumber];
const winner = calculateWinner(current.squares);

let status;
if(winner){
  status = 'Winner: ' + winner;
}else {
  status =`Next player : ${xIsNext ?'X' : 'O'}`
}

const handleClick= (i)=>{
  
  const newHistory = history.slice(0,stepNumber+1);
  const newCurrent = newHistory[newHistory.length-1];
  const newSquares = newCurrent.squares.slice();

  if(calculateWinner(newSquares)||newSquares[i]){
      return;
  }

  newSquares[i]= xIsNext? 'X' : 'O' ;
  setHistroy([...newHistory , {squares:newSquares}]) ;
  setxIsNext(prev => !prev);

  setStepNumber(newHistory.length);
}

//저장된 history로 돌아가기 위한 함수
const moves = history.map((step,move)=>{
  const desc = move?
  'Go to move #'+move:
  'Go to game start';
  return (
    <li>
      <button className="move-button" onClick={()=>jumpTo(move)}>{desc}</button>
    </li>

  )
})

const jumpTo =(step) => {
  setStepNumber(step);
  setxIsNext((step%2)===0);
}

  return (
    <div className="game">
      <div className="game-board">
      <Board squares={current.squares} onClick={(i)=>handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <ol style={{listStyle: 'none'}}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
