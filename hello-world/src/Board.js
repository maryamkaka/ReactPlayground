import { useState } from "react";
import { Square } from "./Square";

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  const buttonHandler = (squareIdx) => {
    console.log(`value: ${squareIdx}`);
    const newSquares = squares.slice();

    newSquares[squareIdx] = player;

    setSquares(newSquares);
    setPlayer(player === "X" ? "O" : "X");
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} buttonHandler={() => buttonHandler(i)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = `Next player: ${player}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winner = lines.find((line) => {
    const [a, b, c] = line;
    return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
  });

  return winner && squares[winner[0]];
}
