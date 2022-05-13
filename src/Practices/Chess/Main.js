import React from "react";
import "./style.css";
function Main() {
  function box() {
    let chessBox = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i % 2 === j % 2) {
          chessBox.push(<div className="white">1</div>);
        } else {
          chessBox.push(<div className="black">2</div>);
        }
      }
    }
    return chessBox;
  }
  return (
    <div className="chessBox">
      <div className="chessBoard">{box().map((item) => item)}</div>
    </div>
  );
}

export default Main;
