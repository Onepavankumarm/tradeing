import React from "react";
import "./chess.css";
function ChessBoard() {
  function chessBox() {
    let box = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i % 2 === j % 2) {
          box.push(<div className="white">1</div>);
        } else {
          box.push(<div className="black">2</div>);
        }
      }
    }
    return box;
  }
  return (
    <div className="main">
      <div className="mainSub">{chessBox().map((item) => item)}</div>
    </div>
  );
}

export default ChessBoard;
