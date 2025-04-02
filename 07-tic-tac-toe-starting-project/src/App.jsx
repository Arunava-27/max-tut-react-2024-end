import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectCell(rowIndex, cellIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns[0]?.player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{square: {row: rowIndex, cell: cellIndex}, player: currentPlayer},...prevTurns];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        {/* GAME BOARD */}
        <GameBoard onSelectCell={handleSelectCell} turns={gameTurns}/>
      </div>
      {/* LOG */}
      <Log turns={
        gameTurns.map((turn, index) => ({
          player: turn.player,
          square: turn.square,
          key: index
      }))}/>
    </main>
  );
}

export default App;
