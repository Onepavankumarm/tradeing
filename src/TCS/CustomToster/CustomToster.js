import React, { useState, useEffect } from "react";
import "./style.css";
function CustomToster() {
  const [list, setlist] = useState([]);
  const [timer, settimer] = useState(0);
  let tostProperty = null;
  const tostHandler = (type) => {
    switch (type) {
      case "Success":
        tostProperty = {
          name: "success",
          time: 4000,
          id: 1,
          color: "lightgreen",
        };
        break;
      case "Warning":
        tostProperty = {
          name: "Warning",
          time: 5000,
          id: 2,
          color: "orange",
        };
        break;
      case "Danger":
        tostProperty = {
          name: "Danger",
          time: 6000,
          id: 3,
          color: "red",
        };
        break;
      default:
        return (tostProperty = []);
    }
    setlist([...list, tostProperty]);
  };
  const deleteHandle = (id) => {
    let finaldata = list.filter((item) => item.id !== id);
    setlist(finaldata);
  };
  useEffect(() => {
    if (list.length) {
      settimer(list[0].time);
    }
  }, [list]);
  useEffect(() => {
    let interval = null;
    if (list.length) {
      interval = setTimeout(() => {
        deleteHandle(list[0].id);
        settimer(timer - list[0].time);
      }, timer);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [deleteHandle, settimer, list]);

  console.log(list);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Custom Toster</h1>
        <button onClick={() => tostHandler("Success")}>Success</button>
        <button onClick={() => tostHandler("Warning")}>Warning</button>
        <button onClick={() => tostHandler("Danger")}>Danger</button>
      </div>
      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        {list.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                background: item.color,
                width: "300px",
                height: "100px",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "20px",
                padding: "20px",
                margin: "10px",
              }}
            >
              <span>{item.name}</span>
              <span onClick={() => deleteHandle(item.id)}>X</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomToster;
