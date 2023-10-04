import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const countRef = useRef(1);
  const nameRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    nameRef.current = text;
  }, [text]);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  // increasing ref value doesnt re-renders the component, hence updated value of current does gets visible on screen
  const handleOnClick = () => {
    countRef.current = countRef.current + 1;
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>My Name is</h1>
      <h2>I rendered these number of times : {countRef.current}</h2>
      <h3 ref={nameRef}>
        My name is {text} it used to be {nameRef.current}
      </h3>
      <button onClick={handleOnClick}>Increase ref.current value</button>
    </div>
  );
};

export default UseRef;
