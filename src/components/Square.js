import { useState } from "react";
import { useEffect } from "react";
export default function Square({
  switchTurn,
  setSwitchTurn,
  index,
  arrayOfX,
  arrayOfO,
  setArrayOfX,
  setArrayOfO,
  isWon,
  setIsWon,
  resetGame,
  setResetGame,
}) {
  const [switchSign, setSwitchSign] = useState("");

  useEffect(() => {
    if (resetGame) {
      setSwitchSign("");
      setResetGame(false); // Reset the global reset state
    }
  }, [resetGame, setResetGame]);

  function handleClick() {
    if (switchSign !== "" || isWon) return;

    if (switchTurn === "X") {
      setSwitchSign("X");
      setSwitchTurn("O");
      setArrayOfX((prev) => [...prev, index + 1]);
    } else {
      setSwitchSign("O");
      setSwitchTurn("X");
      setArrayOfO((prev) => [...prev, index + 1]);
    }
  }

  return (
    <div className="square" onClick={handleClick}>
      {switchSign}
    </div>
  );
}
