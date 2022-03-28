import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countNumberUp, countNumberDown } from "../../redux/Actions/countAction"
function Main() {
    const count = useSelector(state => state.countReducer);
    const dispatch = useDispatch();
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(countNumberUp())}>Increment</button>
            <button onClick={() => dispatch(countNumberDown())}>Decrement</button>
        </div>
    )
}

export default Main