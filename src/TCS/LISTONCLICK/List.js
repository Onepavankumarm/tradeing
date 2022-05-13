import React, { useState, useEffect } from "react";
import "./style.css";
let url = "https://jsonplaceholder.typicode.com/users";
function List() {
  const [list, setlist] = useState([]);
  const [loading, setloading] = useState(false);
  const [details, setdetails] = useState("");
  const fetchData = async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    setlist(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const dataHandlerMaga = async (id) => {
    setloading(true);
    let responce = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    let data = await responce.json();
    setloading(false);
    setdetails(data);
    console.log(data);
  };
  return (
    <div className="main">
      <div className="sub1">
        {list.map((item, i) => {
          return (
            <div
              onClick={() => dataHandlerMaga(item.id)}
              style={{
                background: "orange",
                margin: "3px",
                padding: "20px 20px",
              }}
              key={i}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="sub2">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          details && (
            <div style={{background:'white',margin:'40px',padding:'30px'}}>
              <h1>{details.email}</h1>
              <h2>{details.name}</h2>
              <h3>{details.phone}</h3>
              <h4>{details.username}</h4>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default List;

//font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
