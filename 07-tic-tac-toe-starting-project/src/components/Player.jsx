import { useState } from "react";


export default function Player({ name, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [saveName, setSaveName] = useState(name);

    const handleEdit = () => {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, newName);
        }
        
    }
    const handlechange = (e) => {
        e.preventDefault();
        setNewName(e.target.value);
    }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        <span className="player-name">
            {isEditing ? (
                <input
                type="text"
                value={newName}
                onChange={handlechange}
                />
            ) : (
                newName
            )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      {
            isEditing ? (
                <>
                <button onClick={() => {
                    setIsEditing(false);
                    setSaveName(newName);
                }}>
                    Save
                </button>
                <button onClick={() => {
                    setIsEditing(false);
                    setNewName(saveName);
                }}>
                    Cancel
                </button>
                </>
            ) : (
                <button onClick={() => {
                    handleEdit();
                    setNewName("");
                }}>Edit</button>
            )
      }
    </li>
  );
}