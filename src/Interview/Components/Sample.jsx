import { useEffect, useRef, useState } from "react";

const Sample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Sample;
