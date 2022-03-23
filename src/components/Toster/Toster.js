import React, { useState, useEffect } from 'react'

function Toster() {
    const [list, setList] = useState([]);
    const [time, setTime] = useState()
    var tostProperty = null;
    const tostHandler = (type) => {
        switch (type) {
            case 'Succcess':
                tostProperty = {
                    id: 1,
                    color: 'green',
                    text: 'success',
                    time: 4000
                }
                break;
            case 'Warning':
                tostProperty = {
                    id: 2,
                    color: 'orange',
                    text: 'Warning',
                    time: 4000
                }
                break;
            case 'Error':
                tostProperty = {
                    id: 3,
                    color: 'red',
                    text: 'Error',
                    time: 4000
                }
                break;
            default: tostProperty = [];

        }
        setList([...list, tostProperty])
    }
    const deleteHandler = (id) => {
        const fliterItem = list.filter((item) => item.id !== id);
        setList(fliterItem)
    }
    useEffect(() => {

        if (list.length) {
            setTime(list[0].time);
        }

    }, [list])

    useEffect(() => {

        let interval = null;
        if (list.length) {
            interval = setInterval(() => {
                deleteHandler(list[0].id)
                setTime(time - list[0].time)
            }, time)
        }

        return () => {
            clearInterval(interval)
        }
    }, [deleteHandler, time, setList, list])
    return (
        <div>
            <div>
                <button className='btn' onClick={() => tostHandler('Succcess')}>Succcess</button>
                <button className='btn' onClick={() => tostHandler('Warning')}>Warning</button>
                <button className='btn' onClick={() => tostHandler('Error')}>Error</button>
            </div>
            <div className='tostBox'>
                {
                    list.map((item) => {
                        return (
                            <div key={item.id} className='itemBox' style={{ background: `${item.color}` }}>
                                <span>{item.text}</span>
                                <span onClick={() => deleteHandler(item.id)}>X</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Toster