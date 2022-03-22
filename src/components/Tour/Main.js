import React, { useState, useEffect } from 'react'
import Tour from "./Tour";
import Loading from "./Loading";
import "./style.css";

const url = 'https://course-api.com/react-tours-project';
function Main() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false)
            setTours(data)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchTours()
    }, [])
    const removeTour = (id) => {

        let final = tours.filter((item) => item.id !== id);
        setTours(final)
    }
    if (loading) {
        return (

            <div className='main'>
                <Loading />
            </div>

        )
    }
    if (tours.length === 0) {
        return (
            <main className='main'>
                <div className='title'>
                    <h2>no tours left</h2>
                    <button className='btn' onClick={() => fetchTours()}>
                        refresh
                    </button>
                </div>
            </main>
        )
    }
    return (
        <div className='main'>
            <Tour tours={tours} removeTour={removeTour} />
        </div>
    )
}

export default Main