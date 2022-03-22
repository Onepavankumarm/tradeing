import React, { useState } from 'react'

function Tou({ id, image, info, name, price, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='tour_div'>
            <article className="single-tour">
                <img src={image} alt={name} />
                <footer>
                    <div className="tour-info">
                        <h4>{name}</h4>
                        <h4 className="tour-price">${price}</h4>
                    </div>
                    <p>
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <span onClick={() => setReadMore(!readMore)} className="readMore">
                            {readMore ? 'show less' : '  read more'}
                        </span>
                    </p>
                    <button className="delete-btn" onClick={() => removeTour(id)}>
                        not interested
                    </button>
                </footer>
            </article>
        </div>
    )
}

export default Tou