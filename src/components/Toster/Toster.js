
import React, { useState, useEffect } from 'react'

function Toster() {
    const [list, setList] = useState([]);
    const [timer, settimer] = useState('')
    useEffect(() => {
        if (list.length) {
            settimer(list[0].time)
        }
    }, [list])

    let seletedTost = '';
    const tostHandler = (type) => {
        switch (type) {
            case 'Success':
                seletedTost = {
                    id: 1,
                    backgraound: 'green',
                    text: 'Success',
                    time: 2000,
                }
                break;
            case 'Warning':
                seletedTost = {
                    id: 2,
                    backgraound: 'orange',
                    text: 'Warning',
                    time: 3000,
                }
                break;
            case 'Danger':
                seletedTost = {
                    id: 3,
                    backgraound: 'red',
                    text: 'Danger',
                    time: 4000,
                }
                break;
            default: seletedTost = []
        }
        setList([...list, seletedTost])
    }
    const deletedHandler = (id) => {
        let filterData = list.filter((item) => item.id !== id);
        setList(filterData)
    }


    useEffect(() => {
        let interval = null
        if (list.length) {
            interval = setTimeout(() => {
                deletedHandler(list[0].id);
                settimer(timer - list[0].time)
            }, timer);
        }
        return () => {
            clearInterval(interval)
        }
    }, [list, deletedHandler, settimer, timer])
    return (
        <div>
            <div>
                <button onClick={() => tostHandler('Success')}>Success</button>
                <button onClick={() => tostHandler('Warning')}>Warning</button>
                <button onClick={() => tostHandler('Danger')}>Danger</button>
            </div>
            <div className='tostBox'>
                {
                    list.map((item, i) => {
                        return (
                            <div key={i} style={{ margin: '10px', display: 'flex', justifyContent: 'space-between', padding: '20px', background: item.backgraound, width: '300px', height: '100px', borderRadius: '20px' }}>
                                <span>{item.text}</span><span onClick={() => deletedHandler(item.id)}>X</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Toster

    // import React, { useState, useEffect } from 'react'

    // function Toster() {
    //     const [list, setList] = useState([]);
    //     const [time, setTime] = useState()
    //     var tostProperty = null;
    //     const tostHandler = (type) => {
    //         switch (type) {
    //             case 'Succcess':
    //                 tostProperty = {
    //                     id: 1,
    //                     color: 'green',
    //                     text: 'success',
    //                     time: 4000
    //                 }
    //                 break;
    //             case 'Warning':
    //                 tostProperty = {
    //                     id: 2,
    //                     color: 'orange',
    //                     text: 'Warning',
    //                     time: 4000
    //                 }
    //                 break;
    //             case 'Error':
    //                 tostProperty = {
    //                     id: 3,
    //                     color: 'red',
    //                     text: 'Error',
    //                     time: 4000
    //                 }
    //                 break;
    //             default: tostProperty = [];

    //         }
    //         setList([...list, tostProperty])
    //     }
    //     const deleteHandler = (id) => {
    //         const fliterItem = list.filter((item) => item.id !== id);
    //         setList(fliterItem)
    //     }
    //     useEffect(() => {

    //         if (list.length) {
    //             setTime(list[0].time);
    //         }

    //     }, [list])

    //     useEffect(() => {

    //         let interval = null;
    //         if (list.length) {
    //             interval = setInterval(() => {
    //                 deleteHandler(list[0].id)
    //                 setTime(time - list[0].time)
    //             }, time)
    //         }

    //         return () => {
    //             clearInterval(interval)
    //         }
    //     }, [deleteHandler, time, setList, list])
    //     return (
    //         <div>
    //             <div>
    //                 <button className='btn' onClick={() => tostHandler('Succcess')}>Succcess</button>
    //                 <button className='btn' onClick={() => tostHandler('Warning')}>Warning</button>
    //                 <button className='btn' onClick={() => tostHandler('Error')}>Error</button>
    //             </div>
    //             <div className='tostBox'>
    //                 {
    //                     list.map((item) => {
    //                         return (
    //                             <div key={item.id} className='itemBox' style={{ background: `${item.color}` }}>
    //                                 <span>{item.text}</span>
    //                                 <span onClick={() => deleteHandler(item.id)}>X</span>
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         </div>
    //     )
    // }

    // export default Toster