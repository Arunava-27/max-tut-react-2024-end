import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


// helper function
function DeriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
      if (gameTurns[0]?.player === 'X') {
        currentPlayer = 'O';
      }

      return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]); 
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = DeriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])]; // deep copy of the initial game board
  // const gameBoard = initialGameBoard; // shallow copy of the initial game board
    for(const turn of gameTurns){
        const {square, player} = turn;
        const {row, cell} = square;
        
        gameBoard[row][cell] = player;
    }

    let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol];
      console.log(`Winner is ${winner}`);
      break;
    }
  }
  // check for draw
  const isDraw = gameTurns.length === 9 && !winner;
  function handleSelectCell(rowIndex, cellIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = DeriveActivePlayer(prevTurns);
      const updatedTurns = [{square: {row: rowIndex, cell: cellIndex}, player: currentPlayer},...prevTurns];
      return updatedTurns;
    });
  }

  const handleReset = () => {
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers, // spread operator to copy the previous state
        [symbol]: newName // update the specific player name by using the symbol as the key
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player name={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {/* GAME BOARD */}
        {(winner || isDraw) && <GameOver winner={winner} onReset={handleReset}/>}
        <GameBoard onSelectCell={handleSelectCell} board={gameBoard}/>
      </div>
      {/* LOG */}
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
