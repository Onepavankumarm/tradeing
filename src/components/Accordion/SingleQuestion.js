import React, { useState } from 'react'

function SingleQuestion({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='question' >
            <header className='questionhead'>
                <h4>{title}</h4>
                <span className='toggle' onClick={() => setShowInfo(!showInfo)}>{showInfo ? '+' : '-'}</span>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default SingleQuestion