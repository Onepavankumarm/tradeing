import React, { useState } from 'react'
import Mounting from "./Mounting"
function Main() {
    const [count, setCount] = useState(0);
    const incressHandler = () => {
        setCount((c) => c + 1);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                {/* <Mount count={count} />
                <button onClick={incressHandler}>Incress</button> */}
                <Mounting />
            </div>

        </div>
    )
}

export default Main

// import React, { Component } from 'react'
// import Mount from "./Mount"
// class Main extends Component {
//     state = {
//         count: 0
//     }
//     incrementHandler = () => {
//         this.setState((prevCount) => {
//             return { count: prevCount.count + 1 }
//         })
//     }
//     render() {
//         return (
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <div>
//                     <Mount count={this.state.count} />
//                     <button onClick={this.incrementHandler}>Incress</button>
//                 </div>
//             </div>
//         )
//     }
// }

//export default Main