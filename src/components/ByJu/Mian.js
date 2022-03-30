import React, { useState } from 'react'
import "./style.css"
function Mian() {
    const [list, setlist] = useState([]);
    const [name, setName] = useState('')
    const changeHandler = (e) => {
        setName(e.target.value);
    }
    const submitHandler = () => {
        setlist([...list, name]);
        setName('');
        console.log('hello')
    }
    return (
        <div className='main'>
            <div className='card'>
                <header>
                    <div className='images'></div>
                </header>
                <br></br>
                <div className='cardbody'>
                    <div className='textBody'>
                        {list.map((item, i) => {
                            return (
                                <span style={{padding:'2px',display:'flex'}} key={i}>{item}</span>
                            )
                        })}
                    </div>
                    <div style={{ display: 'flex' }}>
                        <input type={"text"} value={name} onChange={changeHandler} /><button onClick={submitHandler} type='button'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mian