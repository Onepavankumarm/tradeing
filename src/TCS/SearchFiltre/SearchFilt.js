import React, { useState } from "react";
import data from "./data.js";
import "./style.css";
function SearchFilt() {
  const [list, setlist] = useState(data);
  console.log(data);
  const changeHandler = (e) => {
    if (e.target.value) {
      let finaldat = list.filter((item) =>
        item.name.toLowerCase().includes(e.target.value)
      );
      setlist(finaldat);
    } else {
      setlist(data);
    }
  };
  return (
    <div className="main">
      <h1>SearchFilt</h1>
      <div>
        <input type={"text"} onChange={changeHandler} />
      </div>
      <div>
        <ul>
          {list.map((item, i) => {
            return <div key={i}>{item.name}</div>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilt;
