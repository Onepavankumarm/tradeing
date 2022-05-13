import React from "react";
import Folder from "./isFolder";
import explorer from "./data";
function Main() {
  console.log(explorer);
  return (
    <div>
      <Folder explorer={explorer}/>
    </div>
  );
}

export default Main;
