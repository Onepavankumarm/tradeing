import React, { useState } from 'react'

function Folder({ explorer }) {
    const [expand, setExpand] = useState(false);
    console.log(explorer.isFolder)
    if (explorer.isFolder) {
        return (
            <div>
                <div onClick={() => setExpand(!expand)}>{explorer.name}<br></br></div>
                <div style={{ display: expand ? 'block' : 'none' }}>
                    {explorer.items.map((item) => {
                        return <Folder key={item.name} explorer={item}></Folder>
                    })}
                </div>
            </div>
        )
    } else {
        return <span>{explorer.name}</span>
    }

}

export default Folder