import React, { useState } from "react";
import "./style.css";
function SearchName() {
  const [name, setname] = useState("");
  const [post, setPost] = useState([]);
  const fetchData = async () => {
    if (name !== "") {
      let responce = await fetch(
        `https://www.omdbapi.com/?apikey=9946a5a3&?&s=${name}&?t=${name}`
      );
      let data = await responce.json();
      setPost(data.Search);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        margin: "30px",
        background: "green",
        height: "100vh",
      }}
    >
      <div>
        <input type={"text"} onChange={(e) => setname(e.target.value)} />
        <button onClick={fetchData}>clickMaga</button>
      </div>
      <div>
        {post.length !== 0 && (
          <div>
            {post.map((item, i) => {
              return (
                <div style={{ color: "white" }} key={i}>
                  {item.Title}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchName;
