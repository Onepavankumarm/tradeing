import React, { useState } from "react";
import "./style.css";
function Enquira_1() {
  const [list, setlist] = useState([
    {
      name: "pavan",
      id: 1,
    },
    {
      name: "kumar",
      id: 2,
    },
    {
      name: "hello",
      id: 3,
    },
  ]);
  const upHandler = (id) => {
    console.log(id);
    let data = [...list];
    if (id !== 0) {
      [data[id], data[id - 1]] = [data[id - 1], data[id]];
      setlist(data);
    }
  };
  const downHandler = (id) => {
    let data = [...list];
    if (id !== data.length - 1) {
      [data[id], data[id + 1]] = [data[id + 1], data[id]];
      setlist(data);
    }
  };
  return (
    <div style={{ background: "orange" }}>
      {list.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              background: "green",
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
              alignItems: "center",
              margin: "30px",
              padding: "20px",
            }}
          >
            <span>{item.name}</span>
            <span>
              <button onClick={() => upHandler(i)}>Up</button>
            </span>
            <span>
              <button onClick={() => downHandler(i)}>down</button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Enquira_1;
