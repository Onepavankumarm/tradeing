import React from 'react'
import "./style.css"
function Mian() {
    const funcHandler = () => {
        alert("child")
    }
    const mainHandler = () =>{
        alert("parent")
    }
    return (
        <div className='main' onClick={(e)=>{mainHandler();e.stopPropagation()}}>
            <div className="submain" onClick={(e)=>{funcHandler();e.stopPropagation()}}></div>
            <div className="submain" onClick={(e)=>{funcHandler();e.stopPropagation()}}></div>
            <div className="submain" onClick={(e)=>{funcHandler();e.stopPropagation()}}></div>
        </div>
    )
}

export default Mian