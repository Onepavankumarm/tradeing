import React, { useState } from "react";

function TicTok() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setisX] = useState(false);
  function computeWinner(square) {
    let winningPattern = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      let [a, b, c] = winningPattern[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }
  function squareHandler(id) {
    if (square[id] || computeWinner(square)) {
      return;
    }
    square[id] = isX ? "X" : "O";
    setSquare(square);
    setisX(!isX);
  }

  let winner = computeWinner(square);
  let status = null;
  if (status) {
    status = "winner" + winner;
  } else {
    status = "winner" + (isX ? "X" : "O");
  }
  function button(id) {
    return (
      <button
        style={{ width: "80px", height: "80px" }}
        onClick={() => squareHandler(id)}
      >
        {square[id]}
      </button>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>TicTok</h1>
      <div style={{ display: "flex" }}>
        <div>{button(0)}</div>
        <div>{button(1)}</div>
        <div>{button(2)}</div>
      </div>
      <div style={{ display: "flex" }}>
        <div>{button(3)}</div>
        <div>{button(4)}</div>
        <div>{button(5)}</div>
      </div>
      <div style={{ display: "flex" }}>
        <div>{button(6)}</div>
        <div>{button(7)}</div>
        <div>{button(8)}</div>
      </div>
      <div>
        <h1>Winner:{status}</h1>
      </div>
    </div>
  );
}

export default TicTok;
