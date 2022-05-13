import React from 'react'

function ChildMaga({name,changeHandler}) {
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>changeHandler("MAGA COME ON YOU CAN")}>change MAGA</button>
    </div>
  )
}

export default ChildMaga