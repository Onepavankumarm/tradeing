// import React from 'react'

// function Main() {
//     function debounce(cb, d) {
//         let timer = null;
//         return (...args) => {
//             if (timer) clearTimeout(timer);
//             timer = setTimeout(() => {
//                 cb(...args)
//             }, d)
//         }
//     }
//     const changeHandler = debounce((e) => {
//         console.log(e.target.value)
//     }, 1000)
//     return (
//         <div>
//             <input type="text" onChange={changeHandler} />
//         </div>
//     )
// }

// export default Main

import React from 'react'

function Main() {
    function debouncing(cb, d) {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                cb(...args);
            }, d);
        }
    }
    const changeHandler = debouncing((e) => {
        console.log(e.target.value)
    }, 1000)
    return (
        <div>
            <form>
                <div>
                    <input type="text" onChange={changeHandler} />
                </div>
            </form>
        </div>
    )
}

export default Main