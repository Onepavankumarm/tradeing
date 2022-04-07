import React, { useContext } from 'react'
import { ThemeContext } from "../../container/App"
function Child({ increment }) {
    let user = useContext(ThemeContext);
    console.log(user)
    return (
        <button onClick={increment}>callback {user}</button>
    )
}

export default Child