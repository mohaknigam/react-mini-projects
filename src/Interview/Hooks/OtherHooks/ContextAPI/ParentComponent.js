import { useState } from "react";
import Child1 from "./Child1";
import ChildA from "./ChildA";
import MyContext from "./MyContext";

const ParentComponent = () => {
  const [div1Text, setdiv1Text] = useState("");
  const [div2Text, setdiv2Text] = useState("");
  return (
    <MyContext.Provider
      value={{
        div1Text: div1Text,
        div2Text: div2Text,
        setdiv1Text,
        setdiv2Text,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "30%",
          marginTop: "10rem",
        }}
      >
        <Child1 />
        <ChildA />
      </div>
    </MyContext.Provider>
  );
};

export default ParentComponent;
