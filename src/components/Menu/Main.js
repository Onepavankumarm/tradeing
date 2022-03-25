import React, { useState } from 'react';
import "./style.css";
import items from './Data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function Main() {
    const [category, setCategory] = useState(allCategories);
    const [listitem, setListitem] = useState(items);
    const pavanFilter = (id) => {
        if (id === 'all') {
            setListitem(items)
            return

        }
        let filter = items.filter((item) => item.category === id)
        setListitem(filter)
    }
    return (
        <div className='main'>
            <div className='subMain'>
                {
                    category.map((item, i) => {
                        return (
                            <div key={i} className="buttonMenu">
                                <button className='pavanButton' onClick={() => pavanFilter(item)}>{item}</button>
                            </div>
                        )
                    })
                }

            </div>
            <hr></hr>
            <div className='mainBox'>
                {
                    listitem.map((item, i) => {
                        return (
                            <div key={i} className="mainSubBox">
                                <article>
                                    <header>
                                        <img src={item.img} />
                                    </header>
                                    <h3>{item.title}</h3>
                                    <p>{item.category}</p>
                                </article>
                            </div>
                        )
                    })
                }
            </div>
        
        </div>
    )
}

export default Main