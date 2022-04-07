import React from 'react'

function Main() {
    function debouncing(cb, d) {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                cb(...args)
            }, d);
        }
    }
    const changeHandler = debouncing((e) => {
        console.log(e.target.value);
    }, 1000)
    return (
        <div>
            <form>
                <input type={"text"} onChange={changeHandler} />
            </form>
        </div>
    )
}

export default Main