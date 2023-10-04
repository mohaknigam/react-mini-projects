import React, { useCallback, useEffect, useState } from "react";

function UseCallbackHook() {
  /*  the main difference between useMemo and useCallback is usMemo cache values and useCallback caches the function itself */
  /*  useMemo caches and returns the value returned by the function but useCallback caches and returns the entire function  */
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const [items, setItems] = useState([]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  const getItems = useCallback(
    () => [number, number + 1, number + 2],
    [number]
  );

  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      {items.map((item, index) => {
        return <h3 key={index}>{item}</h3>;
      })}
    </div>
  );
}

export default UseCallbackHook;
