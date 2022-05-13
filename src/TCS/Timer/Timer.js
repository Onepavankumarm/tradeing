import React, { useEffect, useState } from "react";
import "./style.css";
function Timer() {
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(0);
  const [active, setactive] = useState(false);
  const [pause, setpause] = useState(true);

  useEffect(() => {
    let interval = null;
    if (active && pause === false) {
      interval = setInterval(() => {
        setTime((c) => c + 1);
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [active, pause]);
  const startHandler = () => {
    setactive(true);
    setpause(false);
  };
  const pauseHandler = () => {
    setpause(!pause);
  };
  const resetHandler = () => {
    setTime(0);
    setactive(false);
  };
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
}

export default Timer;
