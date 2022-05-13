import React, { useState } from "react";
import "./style.css";
function CustomPop() {
  const [display, setdisplay] = useState(false);
  return (
    <div className="main">
      <div className="sub_1">
        <h1>Hello click Maga</h1>
        <button onClick={() => setdisplay(!display)}>click</button>
      </div>
      {display ? (
        <div className="sub_2">
          <button onClick={()=>setdisplay(false)}>close</button>
        </div>
      ) : null}
    </div>
  );
}

export default CustomPop;
