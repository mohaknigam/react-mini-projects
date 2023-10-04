import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("00:00:00");
  const getTime = () => {
    const date = new Date();
    const hrs = date.getHours().toString().padStart(2, "0");
    const mins = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");

    const timeString = `${hrs}:${mins}:${sec}`;
    setTime(timeString);
  };
  useEffect(() => {
    const intId = setInterval(() => {
      getTime();
    }, 1000);

    return () => {
      clearInterval(intId);
    };
  }, []);
  return (
    <div className="timer-container">
      <h1 className="clock">{time}</h1>
    </div>
  );
};

export default Clock;
