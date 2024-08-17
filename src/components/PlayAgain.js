export default function PlayAgain({
  setResetGame,
  setSwitchTurn,
  setArrayOfX,
  setArrayOfO,
  setIsWon,
}) {
  function handleReset() {
    setResetGame(true);
    setSwitchTurn("X");
    setArrayOfX([]);
    setArrayOfO([]);
    setIsWon(false);
  }

  return (
    <button className="again" onClick={handleReset}>
      Play again
    </button>
  );
}
