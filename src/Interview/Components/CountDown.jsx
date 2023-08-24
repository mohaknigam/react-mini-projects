import { useEffect, useRef, useState } from "react";

const CountDown = () => {
  const [inputHours, setInputHours] = useState("");
  const [inputMinutes, setInputMinutes] = useState("");
  const [inputSeconds, setInputSeconds] = useState("");
  const [seconds, setSeconds] = useState("");
  const [start, setStart] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const inputRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalRef.current);
      setStart(false);
      setIsPause(false);
      inputRef.current.focus();
    }
  }, [seconds]);

  useEffect(() => {
    console.log("after");

    if (start && !isPause) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevState) => prevState - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start, isPause]);

  const getTimer = (secs) => {
    const d = new Date(0);
    d.setSeconds(secs);

    return d.toISOString().slice(11, 19);
  };

  const handleStart = () => {
    setStart(true);
  };
  const handleEnter = () => {
    if (inputSeconds !== "" && inputHours !== "" && inputMinutes !== "") {
      const totalSeconds =
        Number(inputHours) * 60 * 60 +
        Number(inputMinutes) * 60 +
        Number(inputSeconds);
      setSeconds(totalSeconds);
      setInputSeconds("");
      setInputHours("");
      setInputMinutes("");
    } else {
      inputRef.current.focus();
    }
  };

  const handlePause = () => {
    if (start) setIsPause(!isPause);
  };

  const handleReset = () => {
    setStart(false);
    setIsPause(false);
    setSeconds(0);
    inputRef.current.focus();
  };

  return (
    <div className="timer-container">
      <div className="input-field">
        <input
          type="number"
          placeholder="Enter Hours"
          value={inputHours}
          ref={inputRef}
          onChange={(e) => setInputHours(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Minutes"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Seconds"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(e.target.value)}
        />

        <button className="btn" onClick={handleEnter}>
          Enter
        </button>
      </div>

      <h1 className="timer">{getTimer(seconds)}</h1>
      <button className="btn" onClick={handleStart}>
        Start
      </button>
      <button className="btn" onClick={handlePause}>
        {isPause ? "Resume" : "pause"}
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default CountDown;
