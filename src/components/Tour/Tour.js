import React from 'react'
import Tou from "./Tou"
function Tour({ tours,removeTour }) {
    return (
        <div>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tou key={tour.id} {...tour}  removeTour={removeTour}/>;
                })}
            </div>
        </div>
    )
}

export default Tour