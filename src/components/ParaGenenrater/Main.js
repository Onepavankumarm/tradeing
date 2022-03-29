import React, { useState } from 'react'
import "./style.css"
import data from "./data"
function Main() {
    const [value, setvalue] = useState();
    const [text, setText] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        let amount = parseInt(value);
        if (amount < 0) {
            amount = 1;
        }
        if (amount > 8) {
            amount = 8
        }
       
        setText(data.slice(0, amount))
    }
    return (
        <div className='main' >
            <h1>Paragraph Grnerater</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="number" onChange={(e) => setvalue(e.target.value)} /><button>Generate</button>
                </div>
            </form>
            <div>
                {
                    text.map((item, i) => {
                        return (
                            <p key={i}>{item}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main