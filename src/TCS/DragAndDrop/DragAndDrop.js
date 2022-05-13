import React, { useState, useRef } from "react";

function DragAndDrop() {
  const first = useRef();
  const second = useRef();
  const [list, setList] = useState([
    "item  1",
    "item  2",
    "item  3",
    "item  4",
    "item  5",
  ]);
  const startDrag = (e, position) => {
    first.current = position;
  };
  const startEnetr = (e, position) => {
    second.current = position;
  };
  const drag = () => {
    const data = [...list];
    const findIndex = data[first.current];
    data.splice(first.current, 1);
    data.splice(second.current, 0, findIndex);
    first.current = null;
    second.current = null;
    setList(data);
    console.log(findIndex);
  };
  return (
    <div>
      <h1>DragAndDrop</h1>
      <div>
        {list.map((item, index) => {
          return (
            <div
              draggable
              onDragStart={(e) => startDrag(e, index)}
              onDragEnter={(e) => startEnetr(e, index)}
              onDragEnd={drag}
              key={index}
              style={{ background: "green", padding: "10px", margin: "20px" }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DragAndDrop;
