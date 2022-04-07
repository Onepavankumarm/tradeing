import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPost } from "../../redux/Actions/postActions"
function Main() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost())
    }, [])

    return (
        <div>Post</div>
    )
}

export default Main