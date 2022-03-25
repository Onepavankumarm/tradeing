import React, { useState } from 'react'
import "./style.css"
function Main() {
    const [name, setname] = useState({
        firstname: '',
        lastname: '',
    })
    const [list, setList] = useState([]);
    const [myId, setIyId] = useState()
    const [count, setcount] = useState(1);
    const [show, setShow] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        if (name.firstname !== '' && name.lastname !== '') {
            setList([...list, { id: count, fname: name.firstname, lname: name.lastname }])
            setname({
                firstname: '',
                lastname: ''
            })
            setcount(c => c + 1)
        }

    }
    const deleteHandler = (id) => {
        let filter = list.filter((item) => item.id !== id);
        setList(filter)
    }
    const editHandler = (id) => {
        setIyId(id)
        setShow(true)
        let listData = [...list]
        let finddata1 = listData.find((item) => item.id === id);
        setname({
            firstname: finddata1['fname'],
            lastname: finddata1['lname']
        })


    }
    const updateHandler = (e) => {
        e.preventDefault()
        let listData = [...list]
        let findIndex = listData.findIndex((item) => item.id === myId);
        let finddata = listData.find((item) => item.id === myId);
        finddata['fname'] = name.firstname;
        finddata['lname'] = name.lastname;
        listData[findIndex] = finddata
        setList(listData)
        setname({
            firstname: '',
            lastname: ''
        })
        setShow(false)
    }
    return (
        <div className='main'>
            <div className='crudBox'>
                <form id="form_crud" onSubmit={!show ? submitHandler : updateHandler}>
                    <div style={{ display: 'flex' }}>
                        <div className='forminput'>
                            <input type="text" value={name.firstname} onChange={(e) => setname({ ...name, firstname: e.target.value })} />
                        </div>
                        <div className='forminput'>
                            <input type="text" value={name.lastname} onChange={(e) => setname({ ...name, lastname: e.target.value })} />
                        </div>
                        <button id="submit" type='btn'>{!show ? 'add' : 'update'}</button>
                    </div>
                </form>
                <div>
                    {
                        list.map((item, i) => {
                            return (
                                <div key={i} className="box">
                                    <div>
                                        <span>{item.fname}</span>{'   '}
                                        <span>{item.lname}</span>
                                    </div>
                                    <div>
                                        <button onClick={() => editHandler(item.id)}>Edit</button>{' '}
                                        <button onClick={() => deleteHandler(item.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default Main