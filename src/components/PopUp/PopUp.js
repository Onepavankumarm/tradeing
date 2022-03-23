import React, { useState } from 'react'

function PopUp() {
    const [show, setShow] = useState(false)
    return (
        <>
            <main className='PopboxHub'>
                <h1>Pavan PopUp</h1>
                <button className='PopUpBox' onClick={() => setShow(!show)} >PopUp</button>
            </main>
            <div className='popupMaga' style={{ display: `${show ? 'block' : 'none'}` }}>
                <span className='poptext'>Pavan popUp</span>
                <span className='cancel' onClick={() => setShow(false)}>X</span>
            </div>
        </>
    )
}

export default PopUp