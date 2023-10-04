import React, { useContext, useState } from "react";
import MyContext from "./MyContext";

function Child2() {
  const { div1Text, div2Text, setdiv1Text } = useContext(MyContext);
  return (
    <div style={{ backgroundColor: "white", width: "50rem", padding: "10px" }}>
      <h2>Text from Div1 : {div1Text}</h2>
      <h3>Text from Div2 : {div2Text}</h3>
      <input
        type="text"
        placeholder="Enter text.."
        value={div1Text}
        onChange={(e) => setdiv1Text(e.target.value)}
      />
    </div>
  );
}

export default Child2;
