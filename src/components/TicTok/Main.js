import React, { useState } from 'react';
import "./style.css";
const calculateTheResult = (square) => {
    let winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningPattern.length; i++) {
        const [a, b, c] = winningPattern[i]
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a]
        }
    }
    return null
}
function Main() {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const submitHandler = (id) => {
        if (square[id] || calculateTheResult(square)) {
            return
        }
        square[id] = isX ? 'X' : 'O';
        setSquare(square);
        setIsX(!isX);
    }
    const winner = calculateTheResult(square);
    let status;
    if (winner) {
        status = "winner"
    } else {
        status = "winner" + (isX ? 'X' : 'O');
    }
    const resethandler = () => {
        setSquare(Array(9).fill(null))
        setIsX(false)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center',  }}>
            <div >
                <div>
                    <button className='custombutton' value={square[0]} onClick={() => submitHandler(0)}>{square[0]}</button>
                    <button className='custombutton' value={square[1]} onClick={() => submitHandler(1)}>{square[1]}</button>
                    <button className='custombutton' value={square[2]} onClick={() => submitHandler(2)}>{square[2]}</button>
                </div>
                <div>
                    <button className='custombutton' value={square[3]} onClick={() => submitHandler(3)}>{square[3]}</button>
                    <button className='custombutton' value={square[4]} onClick={() => submitHandler(4)}>{square[4]}</button>
                    <button className='custombutton' value={square[5]} onClick={() => submitHandler(5)}>{square[5]}</button>
                </div>
                <div>
                    <button className='custombutton' value={square[6]} onClick={() => submitHandler(6)}>{square[6]}</button>
                    <button className='custombutton' value={square[7]} onClick={() => submitHandler(7)}>{square[7]}</button>
                    <button className='custombutton' value={square[8]} onClick={() => submitHandler(8)}>{square[8]}</button>
                </div>
            </div>
            <div>
                <h1>{status}</h1>
                <button onClick={resethandler}>Restart</button>
            </div>
        </div>
    )
}

export default Main

// import React, { useState } from 'react';
// import "./style.css";
// function Square({ value, onClick }) {
//     return <button className="buttonMaga" onClick={onClick}>{value}</button>
// }
// function calculateResult(square) {

//     let resultPattern = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6,],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ]
//     for (let i = 0; i < resultPattern.length; i++) {
//         const [a, b, c] = resultPattern[i];
//         if (square[a] && square[a] === square[b] && square[a] === square[c]) {
//             return square[a]
//         }
//     }
//     return null
// }
// function Main() {
//     const [square, setAquare] = useState(Array(9).fill(null))
//     const [isX, setIsX] = useState(true);
//     const dataHandler = (i) => {
//         if (calculateResult(square) || square[i]) {
//             return
//         }
//         square[i] = isX ? 'X' : 'O';
//         setAquare(square);
//         setIsX(!isX)
//     }
//     let winner = calculateResult(square);
//     console.log(square)
//     let status;
//     if (winner) {
//         status = "winner "
//     } else {
//         status = "winner" + ' ' + (isX ? 'x' : '0');
//     }
//     const resetHandler = () => {
//         setAquare(Array(9).fill(null))
//         setIsX(false);
//     }
//     return (
//         <div className='main'>
//             <div className='mainBox'>
//                 <div className='rowBox'>
//                     <Square value={square[0]} onClick={() => dataHandler(0)}></Square>
//                     <Square value={square[1]} onClick={() => dataHandler(1)}></Square>
//                     <Square value={square[2]} onClick={() => dataHandler(2)}></Square>
//                 </div>
//                 <div className='rowBox'>
//                     <Square value={square[3]} onClick={() => dataHandler(3)}></Square>
//                     <Square value={square[4]} onClick={() => dataHandler(4)}></Square>
//                     <Square value={square[5]} onClick={() => dataHandler(5)}></Square>
//                 </div>
//                 <div className='rowBox'>
//                     <Square value={square[6]} onClick={() => dataHandler(6)}></Square>
//                     <Square value={square[7]} onClick={() => dataHandler(7)}></Square>
//                     <Square value={square[8]} onClick={() => dataHandler(8)}></Square>
//                 </div>
//             </div>
//             <div>
//             <div>{status}</div>
//             <button onClick={resetHandler}>Restart</button>
//             </div>

//         </div>
//     )
// }

// export default Main
