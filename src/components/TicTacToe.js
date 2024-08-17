import { useState } from "react";
import Square from "./Square";
import Winner from "./Winner";
import PlayAgain from "./PlayAgain";

export default function TicTacToe() {
  const [switchTurn, setSwitchTurn] = useState("X");
  const [arrayOfX, setArrayOfX] = useState([]);
  const [arrayOfO, setArrayOfO] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [resetGame, setResetGame] = useState(false);

  return (
    <div className="tic-tac-toe-container">
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Square
              key={index}
              switchTurn={switchTurn}
              setSwitchTurn={setSwitchTurn}
              index={index}
              arrayOfX={arrayOfX}
              arrayOfO={arrayOfO}
              setArrayOfX={setArrayOfX}
              setArrayOfO={setArrayOfO}
              isWon={isWon}
              setIsWon={setIsWon}
              resetGame={resetGame}
              setResetGame={setResetGame}
            />
          ))}
      </div>
      <div className="game-info">
        <Winner arrayOfX={arrayOfX} arrayOfO={arrayOfO} setIsWon={setIsWon} />
        <PlayAgain
          setResetGame={setResetGame}
          setSwitchTurn={setSwitchTurn}
          setArrayOfX={setArrayOfX}
          setArrayOfO={setArrayOfO}
          setIsWon={setIsWon}
        />
      </div>
    </div>
  );
}
