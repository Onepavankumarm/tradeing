import React, { useState } from 'react'
import data from "./data.js";
function Review() {
    const [index, setIndex] = useState(0);
    const { image, name, job, text } = data[index];
    const prevItem = () => {
        setIndex((index) => index - 1)
    }
    const nextItem = () => {

        setIndex((index) => index + 1)

    }
    const surprice = () => {
        let randomNumber = Math.floor(Math.random() * data.length);
        setIndex(randomNumber)
    }
    return (
        <article className='review-card'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevItem} disabled={index === 0 ? "true" : ""}>
                    prev
                </button>
                <button className='next-btn' onClick={nextItem} disabled={data.length - 1 === index ? "true" : ""} >
                    next
                </button>
            </div>
            <button onClick={surprice} className="surprice">
                Surprise
            </button>
        </article >
    )
}

export default Review