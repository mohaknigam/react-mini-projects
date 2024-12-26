import debounce from "debounce";
import React, { useEffect, useRef, useState } from "react";

const Debounce = () => {
  const [countClicked, setCountClicked] = useState(0);
  const [debouncedClick, setDebouncedClick] = useState(0);
  const debounceRef = useRef();
  const handleOnClick = () => {
    setCountClicked((prev) => prev + 1);
    debounceRef.current();
  };

  const myDebounce = function (cb, delay) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  useEffect(() => {
    // debounceRef.current = debounce(() => {
    //   setDebouncedClick((prev) => prev + 1);
    // }, 1000);
    debounceRef.current = myDebounce(() => {
      setDebouncedClick((prev) => prev + 1);
    }, 1000);

    // return () => {
    //   if (debounceRef.current) {
    //     debounceRef.current.clear();
    //   }
    // };
  }, []);
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <button className="bg-gray-500 p-3 text-white" onClick={handleOnClick}>
        Click me
      </button>
      <p>{`Button clicked ${countClicked} times`}</p>
      <p>{`event trigerred ${debouncedClick} times`}</p>
    </div>
  );
};

export default Debounce;
