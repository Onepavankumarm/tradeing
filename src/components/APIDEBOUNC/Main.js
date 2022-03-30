import React, { useState } from 'react'
import "./style.css"
function Main() {
    const [list, setList] = useState([])
    function debouncing(cb, d) {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                cb(...args)
            }, d);
        }
    }
    const chnageHandler = debouncing(async (e) => {
        const response = await fetch(`https://demo.dataverse.org/api/search?q=${e.target.value}`);
        const data = await response.json();
        setList(data.data.items)
        console.log(data.data.items)
    }, 500)
    console.log(list)
    return (
        <div className='main'>
            <input type={"text"} placeholder={"wnter the text"} onChange={chnageHandler} />
            {list.length !== 0 &&
                (<div className='searchRes'>
                    {list.map((item, i) => {
                        console.log(item)
                        return (
                            <span className='searchMaga' key={i}>{item.name}</span>
                        )
                    })}
                </div>)
            }
        </div>
    )
}

export default Main