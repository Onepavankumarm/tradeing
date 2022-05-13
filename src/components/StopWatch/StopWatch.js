import React, { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(true);
  useEffect(() => {
    let interval = null;
    if (active && pause === false) {
      interval = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [active, pause]);
  const startHandler = () => {
    setActive(true);
    setPause(false);
  };
  const pauseHandler = () => {
    setPause(!pause);
  };
  const restartHandler = () => {
    setActive(false);
    setCount(0);
  };
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>{count}</h1>
        <div>
          <button onClick={startHandler}>start</button>
          <button onClick={pauseHandler}>pause</button>
          <button onClick={restartHandler}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
// import React, { useState, useEffect } from 'react'

// function StopWatch() {
//     const [timer, setTimer] = useState(0);
//     const [active, setactive] = useState(false)
//     const [pause, setpause] = useState(true)
//     useEffect(() => {
//         let interval = null;
//         if (active && pause === false) {
//             interval = setInterval(() => {
//                 setTimer((C) => C + 1);
//             }, 100);
//         } else {
//             clearTimeout(interval);
//         }
//         return () => {
//             clearTimeout(interval);
//         }
//     }, [active, pause])

//     const startHandler = () => {
//         setactive(true);
//         setpause(false)
//     }
//     const pauseHandler = () => {
//         setpause(!pause);
//     }
//     const resetHandler = () => {
//         setactive(true)
//         setTimer(0)
//     }

//     return (
//         <div className='TimerBox'>
//             <h1>Timer : {timer}</h1>
//            <div className='TimerBoxsub'>
//                 <button className='btn' onClick={startHandler}>Start</button>{'    '}
//                 <button className='btn' onClick={pauseHandler}>Pause</button>{'    '}
//                 <button className='btn' onClick={resetHandler}>Reset</button>{'    '}
//             </div>
//         </div>
//     )
// }

// export default StopWatch
