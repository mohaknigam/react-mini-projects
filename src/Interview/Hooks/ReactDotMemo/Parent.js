import { useEffect, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [name, setName] = useState({ value: "abc" });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setName((prevState) => ({ ...prevState, value: "abc" }));
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <Child1 name={name.value} />
      <Child2 name={name.value} />
    </div>
  );
};

export default Parent;
