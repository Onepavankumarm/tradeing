import React, { useEffect, useState } from 'react'
import DragNDrop from "./DragNDrop"
const defaultData = [
    { title: 'group 1', items: ['1', '2', '3'] },
    { title: 'group 2', items: ['4', '5'] }
]

function Main() {
    const [data, setData] = useState();
    useEffect(() => {
        if (localStorage.getItem('List')) {
            console.log(localStorage.getItem('List'))
            setData(JSON.parse(localStorage.getItem('List')))
        } else {
            setData(defaultData)
        }
    }, [setData])
    return (
        <div>
            <DragNDrop data={data} />
        </div>
    )
}

export default Main