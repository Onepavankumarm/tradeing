import React from 'react'
import explorer from "./FolderData";
import Folder from "./Folder"
function Main() {
    console.log(explorer)
    return (
        <div>
            <div>
                <Folder explorer={explorer} />

            </div>
        </div>
    )
}

export default Main