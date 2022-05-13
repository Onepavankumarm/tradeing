// import React, { useState, useEffect } from 'react'

// function Main() {
//     const [count, setcount] = useState(0);
//     useEffect(() => {
//         let interval = null;
//         interval = setInterval(() => {
//             setcount(c => c + 1);
//         }, 1000)
//         return () => {
//             clearInterval(interval)
//         }
//     }, [])

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>{count}</h1>
//             <h1>{count / 2}</h1>
//         </div>
//     )
// }

// export default Main
import React from 'react'

function Main() {
  return (
    <div>Main</div>
  )
}

export default Main