import React, { useState } from 'react';
import List from "./List";
import data from "./data";
import "./style.css"
function Main() {
    const [people, setPeople] = useState(data)
    return (
        <div className='main'>
            <main className="birthday">
                <section className="container">
                    <h3 id="Birthaday-count">{people.length} Birthday Today</h3>
                    <List people={people} />
                    <button className='clear-btn' onClick={() => setPeople([])}>Clear All</button>
                </section>
            </main>
        </div>

    )
}

export default Main