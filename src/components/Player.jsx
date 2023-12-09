import { useState } from "react"

export default function Player({initialName , symbol ,isActive}){

const [isEditing, setIsEditing] = useState(false)
const [playerName, setPlayerName] = useState(initialName) 

function handleEditCLick(){
    setIsEditing(editing=>!editing); //best practice to use a function when updating state based on previous state
}

function handleChange(event){
  // console.log(event)
  setPlayerName(event.target.value)
}

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {isEditing===false ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={handleChange}></input>}
          <span className="player-symbol">{symbol}</span>
            </span>
          <button onClick={handleEditCLick}>{isEditing?"Save" : "Edit"}</button>
          </li>
    )
}