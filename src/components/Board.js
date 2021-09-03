import React from 'react'
import Square from './Square'
//this can be imported anywhere because they are global

const Board = ({board, handleSquareClick, winningSquares}) => {

    const renderSquare = (position) =>{
        const isWinningSquare = winningSquares.includes(position)
        return  <Square value={board[position]} onClick={()=> handleSquareClick(position)} isWinningSquare={isWinningSquare} />
    }
    return (
        <div className="board">
            
            <div className="board-row">
                { renderSquare(0)}
                { renderSquare(1)}
                { renderSquare(2)}
                
                {/* writing them as this will set their value to null and <Square value={1}/> was assigning the value like 0,1,2,3 etc 
                =================================
                we'll we removing all square i.e  <Square value={board[2]}/> and replace with {renderSquare(0)} so that it becomes easy and clean
                 */}
            </div>
            <div className="board-row">
                { renderSquare(3)}
                { renderSquare(4)}
                { renderSquare(5)}
            </div>
            <div className="board-row">
                { renderSquare(6)}
                { renderSquare(7)}
                { renderSquare(8)}
            </div>

        </div>
    )
}

export default Board
