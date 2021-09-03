// import logo from './logo.svg';
// import './App.css';
import Board from './components/Board'
import History from './components/History'
import StatusMessage from './components/StatusMessage'
import './styles/root.scss'
import React, { useState } from 'react';
import { calculateWinner } from './components/helpers';

const NEW_GAME = [
  { board: Array(9).fill(null), isXNext: true}
]

function App() {

  const [history, setHistory] = useState(NEW_GAME);// This creates an array of 9 elements with default value of null
  const [currentMove , setCurrentMove] = useState(0);

  const current = history[currentMove];
  console.log('history' , history);
  // const[isXNext , setIsNext] = useState(false);

  // console.log("board rendered");
  
  const {winner, winningSquares} = calculateWinner(current.board);
  
  // console.log(winner);2
  
  //This function will handle what will happen if we click the square
  const handleSquareClick = (position) => {
      //THis will not allow square to change its value if we click twice or thrice
      if(current.board[position] || winner){
          return;
      }
      setHistory((prev) => {
        //THis will get last eement of this array
        const last = prev[prev.length - 1];

          const newBoard =  last.board.map((square , pos) => {
              if(pos === position){
                  return last.isXNext ? 'X' : 'O';
                  //This will check whose turn it is
              }
              return square;
          })
          return prev.concat({board : newBoard, isXNext: !last.isXNext})
      })
        setCurrentMove(prev => prev +1);
  }

  const moveTo = (move) =>{
      setCurrentMove(move);
  }

  const onNewGame = () =>{
    setHistory(NEW_GAME)
    setCurrentMove(0);
  }

  return (
    <div className="app">
      <h1>Tic <span className = "text-green">Tac</span> Toe</h1>
      <StatusMessage winner = {winner} current = {current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares = {winningSquares}/>
      <button type ="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}>Start New Game</button>
      <h2 style={{fontWeight: 'normal'}}>Current Game History</h2>
      <History history = {history} moveTo = {moveTo} currentMove = {currentMove}/>
      <div className="bg-balls"/>
     </div>
  );
}

export default App;
