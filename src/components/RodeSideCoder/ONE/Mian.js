// import React, { Component } from 'react';
// import Sub from "./Sub";
// class Mian extends Component {
//     state = {
//         count: 0,
//     }
//     countHandler = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <Sub count={this.state.count} />
//                 <button onClick={this.countHandler}>count</button>
//             </div>
//         )
//     }
// }

// export default Mian

import React, { useState } from 'react'
import Sub from "./Sub";
function Mian() {
    const [count, setCount] = useState(0)
    const countHandler = () => {
        setCount(h => h + 1)
    }
    return (
        <div>
            <Sub count={count} />
            <button onClick={countHandler}>count</button>
        </div>
    )
}

export default Mian