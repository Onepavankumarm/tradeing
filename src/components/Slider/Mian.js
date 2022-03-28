import React, { useState } from 'react';
import "./style.css";
import data from "./Data.js"
function Mian() {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);
    const { image, name, title, quote } = people[index];
    const incress = () => {
        setIndex(c => c + 1)
    }
    const decress = () => {
        setIndex(c => c - 1)
    }
    return (
        <div className='main'>
            <div className='review'>
                <button className='left' onClick={decress} disabled={index === 0 ? "true" : ""}>-</button>
                <div className='center'>
                    <article>
                        <header>
                            <img src={image} alt={name} className="reviewImg" />
                        </header>
                        <h6>{title}</h6>
                        <p>{quote}</p>
                    </article>
                </div>
                <button className='right' onClick={incress} disabled={data.length - 1 === index ? "true" : ""} >+</button>
            </div>
        </div>
    )
}

export default Mian