import React from 'react'

function Main() {
    const changeHandler = (e) => {
        alert(e.target.value)
    }
    return (
        <div>
            <select onChange={changeHandler}>
                <option>green</option>
                <option>Yello</option>
                <option>red</option>
            </select>
        </div>
    )
}

export default Main

// import React from 'react'


// function Main() {
//     const changeHandler = (e) => {
//        alert(e.target.value)
//     }
//     return (
//         <div style={{ textAlign: 'center', margin: '30px' }}>
//             <select onChange={changeHandler}>
//                 <option>green</option>
//                 <option>orange</option>
//                 <option>Yello</option>
//             </select>
//         </div>
//     )
// }

// export default Main