import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return initialState
        default: return state
    }
}
function Parent() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch('INCREMENT')}>increnet</button>
            <button onClick={() => dispatch('DECREMENT')}>decrement</button>
            <button onClick={() => dispatch('RESET')}>reset</button>
        </div>
    )
}

export default Parent

// import React, { useState } from 'react'
// import Child from "./Child"
// function Parent() {
//     const [count, setCount] = useState(0)
//     const increment = () => {
//         setCount(c => c + 1)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <Child increment={increment} />
//         </div>
//     )
// }

// export default Parent