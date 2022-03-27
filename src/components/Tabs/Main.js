import React, { useEffect, useState } from 'react'
import "./style.css";
const url = `https://course-api.com/react-tabs-project`;
function Main() {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [value, setValue] = useState(0);
    const [active, setActive] = useState([])
    const fetchData = async () => {
        try {
            let responce = await fetch(url);
            let newArray = await responce.json();
            setLoading(false)
            setActive(newArray[0])
            setList(newArray)


        } catch (error) {
            setLoading(false)
            console.log("Error")
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    if (loading) {
        return (
            <div className='main'>
                <h1 style={{ textAlign: 'center' }}>Loading.......</h1>
            </div>
        )
    }

    const changeHandler = (id) => {
        const data = [...list];
        console.log(data[id])
        setActive(data[id])
        setValue(id)
    }

    return (
        <div className='main'>
            <section className='sectionBox'>
                <div className="title">
                    <h2>experience</h2>
                    <div className="underline"></div>
                </div>
                <div className='mainContainer'>
                    <div className='subContainerone'>
                        <div className='btnlist'>
                            {
                                list.map((item, i) => {
                                    return (
                                        <button className={`btndisplay ${i === value ? 'Active' : ''}`} onClick={() => changeHandler(i)} key={i}>{item.title}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='subContainertwo'>
                        {list.length && (<article>
                            <h3>{active.title}</h3>
                            <h4>{active.company}</h4>
                            <p className="job-date">{active.dates}</p>
                            <ul>
                                {
                                    active.duties.map((item, i) => {
                                        return (
                                            <li key={i} >{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </article>)}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main