import React, { useState } from "react";

function DropDownList({ explorer }) {
  const [expand, setexpand] = useState(false);
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div>
        <div onClick={() => setexpand(!expand)}>{explorer.name}</div>
        <div style={{ display: expand ? "block" : "none" }}>
          {explorer.items.map((item) => {
            return (
              <DropDownList key={item.name} explorer={item}></DropDownList>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>{explorer.name}</div>;
  }
}

export default DropDownList;
