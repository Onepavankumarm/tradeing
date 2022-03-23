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
    const pauseHandler = () => {
        setpause(!pause);
    }
    const resetHandler = () => {
        setactive(true)
        setTimer(0)
    }

    return (
        <div className='TimerBox'>
            <h1>Timer : {timer}</h1>
           <div className='TimerBoxsub'>
                <button className='btn' onClick={startHandler}>Start</button>{'    '}
                <button className='btn' onClick={pauseHandler}>Pause</button>{'    '}
                <button className='btn' onClick={resetHandler}>Reset</button>{'    '}
            </div>
        </div>
    )
}

export default StopWatch