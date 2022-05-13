import React, { useState } from "react";
function calculateWinnerMaga(square) {
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
    if (square[a] && square[a] === square[b] && square[a] == square[c]) {
      return square[a];
    }
  }
  return null;
}
function Main() {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [isX, setisX] = useState(true);
  console.log(square);
  const squareHandler = (id) => {
    if (square[id] || calculateWinnerMaga(square)) {
      return;
    }
    console.log(id);
    square[id] = isX ? "X" : "0";
    setsquare(square);
    setisX(!isX);
  };
  let winner = calculateWinnerMaga(square);
  let status = null;
  if (winner) {
    status = "winnner";
  } else {
    status = "winner" + isX ? "X" : "O";
  }
  return (
    <div style={{ display: "flex", flexDirection: "column",alignItems:'center' }}>
      <br></br>
      <div>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(0)}
        >
          {square[0]}
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(1)}
        >
          {square[1]}
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(2)}
        >
          {square[2]}
        </button>
      </div>
      <div>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(3)}
        >
          {square[3]}
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(4)}
        >
          {square[4]}
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(5)}
        >
          {square[5]}
        </button>
      </div>
      <div>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(6)}
        >
          {square[6]}
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(7)}
        >
          {square[7]}
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
            float: "left",
          }}
          onClick={() => squareHandler(8)}
        >
          {square[8]}
        </button>
      </div>
      {status}
    </div>
  );
}

export default Main;
