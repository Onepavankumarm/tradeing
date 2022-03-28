import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectedSong from "./SelectedSong";
import { songSelect } from "../../redux/Actions/songAction";
import "./style.css";
function Main() {
    const list = useSelector(state => state.songList);
    const [songs] = useState(list);
    const dispatch = useDispatch(null)
    return (
        <div className='main'>
            <div className='subMain'>
                <h3>List Of Song</h3>
                {songs.map((item, i) => {
                    return (
                        <div key={i} className="songlist" onClick={() => dispatch(songSelect(item))}>
                            <p>{item.name} </p>
                            <p>{item.time}</p>
                        </div>
                    )
                })}
            </div>
            <div className='subMain'>
                <SelectedSong />
            </div>
        </div>
    )
}

export default Main