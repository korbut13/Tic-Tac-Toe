import { useState } from "react";

export default function Player({initialName, symbol}){
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick(){
    setIsEditing(editing => !editing);
  };

  function handleInput(event){
    setPlayerName(prevName => event.target.value)
  }


  let editingPlayerName = <span className="player-name">{playerName}</span>;
  if(isEditing){
    editingPlayerName = <input value={playerName} onChange={handleInput}></input>;
  }

  return <li>
  <span className="player">
    {editingPlayerName}
    <span className="player-symbol">{symbol}</span>
  </span>
  <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
</li>
}