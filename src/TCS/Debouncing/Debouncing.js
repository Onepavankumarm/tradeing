import React from "react";

function Debouncing() {
  function deBouncing(fn, delay) {
    let timerr;
    return (...args) => {
      if (timerr) clearTimeout(timerr);
      timerr = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }
  const changeHandler = deBouncing((e) => {
    console.log(e.target.value);
  }, 1000);
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input type={"text"} onChange={changeHandler} />
      </div>
    </div>
  );
}

export default Debouncing;
