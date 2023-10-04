import { useMemo, useState } from "react";

const ExpensiveCalculation = ({ value }) => {
  const expensiveCalulation = (value) => {
    console.log("function called with : " + value);
    let result = 0;
    for (let i = 1; i <= value; i++) {
      result += i;
    }
    return result;
  };

  const calculatedValue = useMemo(() => {
    return expensiveCalulation(value);
  }, [value]);
  return (
    <div>
      <p>value : {value}</p>
      <p>Result of expensive calulation : {calculatedValue}</p>
    </div>
  );
};

const UseMemoHook = () => {
  /*  the main difference between useMemo and useCallback is usMemo cache values and useCallback caches the function itself */
  /*  useMemo caches and returns the value returned by the function but useCallback caches and returns the entire function  */
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="memo-container">
      <input
        type="number"
        placeholder="Enter"
        value={value}
        onChange={handleOnChange}
      />
      <ExpensiveCalculation value={value} />

      <input
        type="text"
        placeholder="second"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default UseMemoHook;
