import React from "react";

function SubComponent({ fetchDataFromUser }) {
  return <button onClick={fetchDataFromUser}>Trigger</button>;
}

export default SubComponent;
