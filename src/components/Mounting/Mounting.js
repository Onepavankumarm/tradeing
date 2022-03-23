import React, { useState, useEffect } from 'react'

function Mounting() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const doSomeThing = (e) => {
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(() => {
        window.addEventListener('mousemove', doSomeThing)
        console.log("mounting and update Phase")
        return () => {
            window.removeEventListener('mousemove', doSomeThing);
            console.log("unmounting")
        }
    }, [])

    return (
        <div>
            <h1>{x}:{y}</h1>
        </div>
    )
}

export default Mounting