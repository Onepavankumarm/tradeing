import React, { useState, useEffect } from "react";

function AutoCount() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setcount((c) => c + 1);
    }, 1000);
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>AutoCount</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default AutoCount;
