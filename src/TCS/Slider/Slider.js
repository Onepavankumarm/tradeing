import React, { useState } from "react";
import "./style.css";
function Slider() {
  const [list, setlist] = useState([
    {
      title: "A message to our customer  1",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "alphabet earning 2",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "artificial mounting 3",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "whats sap 4",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "the emu war 5",
      upvotes: 24,
      date: "2019-11-21",
    },
  ]);
  const [count, setcount] = useState(0);
  return (
    <div className="main">
      <div className="submain">
        <div className="submain_1">
          <button onClick={() => setcount(0)}>reset</button>
          <button onClick={() => setcount((c) => c - 1)} disabled={count<=0}>
            prev
          </button>
          <button
            onClick={() => setcount((c) => c + 1)}
           disabled={count===list.length-1}
          >
            next
          </button>
        </div>
        <div className="submain_2">
          <h2>{list[count].title}</h2>
          <h2>{list[count].date}</h2>
        </div>
      </div>
    </div>
  );
}

export default Slider;
