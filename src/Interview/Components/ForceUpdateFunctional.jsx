import React, { useState } from "react";

const ForceUpdateFunctional = () => {
  var count = 0;

  // Example using forceUpdate to update count and trigger re-render (not recommended)
  const updateCountUsingForceUpdate = () => {
    count = count + 1;

    // will give error though
    React.forceUpdate(ForceUpdateFunctional);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={updateCountUsingForceUpdate}>Update Count</button>
    </div>
  );
};

export default ForceUpdateFunctional;
