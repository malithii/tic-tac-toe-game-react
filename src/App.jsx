import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"

function App() {
  
const [activePlayer, setActivePlayer] = useState('X')
const [gameTurns, setGameTurns] = useState([])

function handleSelectSquare(rowIndex, colIndex){
  setActivePlayer(curActivePlayer=> curActivePlayer==='X' ? 'O' : 'X') //change active player
  setGameTurns(prevTurns =>{
    let currentPlayer = 'X'

    if(prevTurns.length>0 && prevTurns[0].player === 'X'){
      currentPlayer = 'O'
    }
    const updatedTUrns = [{square: { row: rowIndex, col: colIndex}, player: activePlayer} , ...prevTurns]

    return updatedTUrns;
  })
  
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
