import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intId = setInterval(() => {
      getTime();
    }, 1000);

    return () => {
      console.log("abc");
      clearInterval(intId);
    };
  }, []);

  const getTime = () => {
    const d = new Date();
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    const seconds = d.getSeconds().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;

    setTime(timeString);
  };
  return (
    <div className="timer-container">
      <h1 className="clock">{time}</h1>
    </div>
  );
};

export default Clock;
