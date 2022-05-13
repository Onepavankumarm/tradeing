import React, { useState } from "react";
import data from "./data";
function MyFilter() {
  const [list, setList] = useState(data);
  const chnageHandler = (e) => {
    if (e.target.value !== "") {
      let filterMaga = list.filter((item) =>
        item.name.toLowerCase().includes(e.target.value)
      );
      setList(filterMaga);
    } else {
      setList(data);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello Pavan Filter</h1>
      <div>
        <input type={"text"} onChange={chnageHandler} />
      </div>
      <div>
        {list.map((item, i) => {
          return <div key={i}>{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export default MyFilter;
