import React from "react";

function Throttling() {
  function Throttling(func, delay) {
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - prev > delay) {
        prev = now;
        return func(...args);
      }
    };
    // let prev = 0;
    // return (...args) => {
    //   let now = new Date().getTime();
    //   if (now - prev > delay) {
    //     prev = now;
    //     return func(...args);
    //   }
    // };
  }
  const throttlingHandler = Throttling(() => {
    console.log("click maga");
  }, 3000);
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={throttlingHandler}>clickMaga</button>
    </div>
  );
}

export default Throttling;
