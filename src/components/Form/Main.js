import React, { useState } from 'react'
import "./style.css"
function Main() {
    const [name, setName] = useState({
        fname: '',
        date: '',
    })
    const [list, setList] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setList([...list, { fname: name.fname, date: name.date }]);
        setName({
            fname: '',
            date: ''
        })
    }


    return (
        <div className='main'>
            <h1>Form</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="fname" value={name.fname} onChange={(e) => setName({ ...name, fname: e.target.value })} />
                </div>
                <div>
                    <input type="date" name="date" value={name.date} onChange={(e) => setName({ ...name, date: e.target.value })} />
                </div>
                <button type='btn'>Submit</button>
            </form>
            <div>
                <ul>
                    {
                        list.map((item, i) => {
                            return (
                                <li key={i}>{item.fname} {item.date}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Main