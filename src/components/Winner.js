export default function winner({ arrayOfX, arrayOfO, setIsWon }) {
  if (
    [1, 2, 3].every((num) => arrayOfX.includes(num)) ||
    [4, 5, 6].every((num) => arrayOfX.includes(num)) ||
    [7, 8, 9].every((num) => arrayOfX.includes(num)) ||
    [1, 4, 7].every((num) => arrayOfX.includes(num)) ||
    [2, 5, 8].every((num) => arrayOfX.includes(num)) ||
    [3, 6, 9].every((num) => arrayOfX.includes(num)) ||
    [1, 5, 9].every((num) => arrayOfX.includes(num)) ||
    [3, 5, 7].every((num) => arrayOfX.includes(num))
  ) {
    setIsWon(true);
    return <p className="winner-message">X have won</p>;
  } else if (
    [1, 2, 3].every((num) => arrayOfO.includes(num)) ||
    [4, 5, 6].every((num) => arrayOfO.includes(num)) ||
    [7, 8, 9].every((num) => arrayOfO.includes(num)) ||
    [1, 4, 7].every((num) => arrayOfO.includes(num)) ||
    [2, 5, 8].every((num) => arrayOfO.includes(num)) ||
    [3, 6, 9].every((num) => arrayOfO.includes(num)) ||
    [1, 5, 9].every((num) => arrayOfO.includes(num)) ||
    [3, 5, 7].every((num) => arrayOfO.includes(num))
  ) {
    setIsWon(true);
    return <p className="winner-message">O have won</p>;
  } else if (arrayOfX.length == 5 && arrayOfO.length == 4) {
    return <p className="winner-message">DRAW</p>;
  }
}
