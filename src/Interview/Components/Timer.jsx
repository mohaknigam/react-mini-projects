import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    let interval;
    if (start && !isPause) {
      interval = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start, isPause]);

  const getTimer = (secs) => {
    let d = new Date(0);

    d.setSeconds(secs);

    return d.toISOString().slice(11, 19);
  };

  const handleStart = () => {
    if (!start) setStart(true);
  };

  const handlePause = () => {
    if (start) setIsPause(!isPause);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsPause(false);
    setStart(false);
  };

  return (
    <div className="timer-container">
      <h1 className="timer">{getTimer(seconds)}</h1>
      <button className="btn" onClick={handleStart}>
        Start
      </button>
      <button className="btn" onClick={handlePause}>
        {!isPause ? "Pause" : "Resume"}
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
