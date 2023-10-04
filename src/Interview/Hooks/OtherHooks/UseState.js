import { useState } from "react";

const UseState = () => {
  const sum = (a, b) => {
    console.log("fun called");
    return a + b;
  };

  // by directly calling sum function, sum function will be called everytime component re-renders
  //   const [num, setNum] = useState(sum(3, 2));

  // by using callback function in useState to call sum function, sum function will be called only once
  const [num, setNum] = useState(() => {
    return sum(3, 2);
  });
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="number"
        placeholder="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default UseState;
