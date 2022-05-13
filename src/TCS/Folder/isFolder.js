import React, { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)}>{explorer.name}</div>
        <div style={{ display: expand ? "block" : "none" }}>
          {explorer.items.map((item, i) => {
            return <Folder key={i} explorer={item}></Folder>;
          })}
        </div>
      </div>
    );
  } else {
    return <div>{explorer.name}</div>;
  }
}

export default Folder;
