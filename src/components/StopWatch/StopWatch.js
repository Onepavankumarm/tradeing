import React, { useState, useEffect } from 'react'

function StopWatch() {
    const [timer, setTimer] = useState(0);
    const [active, setactive] = useState(false)
    const [pause, setpause] = useState(true)
    useEffect(() => {
        let interval = null;
        if (active && pause === false) {
            interval = setInterval(() => {
                setTimer((C) => C + 1);
            }, 100);
        } else {
            clearTimeout(interval);
        }
        return () => {
            clearTimeout(interval);
        }
    }, [active, pause])

    const startHandler = () => {
        setactive(true);
        setpause(false)
    }
    const pauseHandler = () =>{
        setpause(!pause);
    }
    const resetHandler = () =>{
        setactive(true)
        setTimer(0)
    }
    
    return (
        <div>
            <h1>Timer : {timer}</h1>
            <button onClick={startHandler}>Start</button>{'    '}
            <button onClick={pauseHandler}>Pause</button>{'    '}
            <button onClick={resetHandler}>Reset</button>{'    '}
        </div>
    )
}

export default StopWatch