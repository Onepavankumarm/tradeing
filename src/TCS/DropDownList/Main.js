import React from "react";
import DropDownList from "./DropDownList";
import explorer from "./data";
function Main() {
  console.log(explorer);
  return (
    <div>
      <h1>Hello</h1>
      <DropDownList explorer={explorer}></DropDownList>
    </div>
  );
}

export default Main;
