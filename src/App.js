import Square from "./components/Square";
import "./styles.css";
import { useState } from "react";
import TicTacToe from "./components/TicTacToe";

export default function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}
