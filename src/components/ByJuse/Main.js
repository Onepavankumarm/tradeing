import React, { useState } from 'react'
import "./style.css"
function Main() {
    const [first, setfirst] = useState([
        { id: 1, name: "A", message: "" },
        { id: 2, name: "B", message: "" },
        { id: 3, name: "C", message: "" },
    ])
    const [active, setActive] = useState(0)
    const myHandler = (id) => {
        setActive(id)
    }
    const changeHandler = (e) => {

        console.log(e.target.value)
        let data = [...first];
        data[active].message = e.target.value;
        setfirst(data)

    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <button className='custombtn' onClick={() => myHandler(0)}>A</button>
                <button className='custombtn' onClick={() => myHandler(1)}>B</button>
                <button className='custombtn' onClick={() => myHandler(2)}>C</button>
            </div>
            <div className='sub_div'>
                <h1>Clicked on : {first[active].name}</h1>
            </div>
            <div className='sub_div_one'>
                <form onSubmit={changeHandler}>
                    <div>
                        <input type="text" value={first[active].message} onChange={changeHandler} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Main