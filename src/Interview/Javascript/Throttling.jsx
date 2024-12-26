import { throttle } from "lodash";
import React, { useState, useEffect, useRef } from "react";

const Throttling = () => {
  const [countClicked, setCountClicked] = useState(0);
  const [throttledClick, setThrottledClick] = useState(0);
  const throttleRef = useRef();

  const myThrottle = function (cb, delay) {
    let last = 0;
    return function (...args) {
      let now = new Date().getTime();
      if (now - last < delay) return;
      last = now;
      return cb(...args);
    };
  };

  const handleOnClick = () => {
    setCountClicked((prev) => prev + 1);
    throttleRef.current();
  };

  useEffect(() => {
    // throttleRef.current = throttle(() => {
    //   setThrottledClick((prev) => prev + 1);
    // }, 2000);
    throttleRef.current = myThrottle(() => {
      setThrottledClick((prev) => prev + 1);
    }, 2000);

    // return () => {
    //   if (throttleRef.current) {
    //     throttleRef.current.clear();
    //   }
    // };
  }, []);
  return (
    <div className="flex flex-col items-center h-screen justify-center gap-10">
      <button className="bg-gray-500 p-4" onClick={handleOnClick}>
        Click Me
      </button>
      <p>{`Button clicked ${countClicked} times`}</p>
      <p>{`event trigerred ${throttledClick} times`}</p>
    </div>
  );
};

export default Throttling;
