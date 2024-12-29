import React from "react";

const ShimmerUI = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((item, idx) => {
          return <div className="w-80 h-80 p-2 border bg-gray-300" key={idx} />;
        })}
    </>
  );
};

export default ShimmerUI;
