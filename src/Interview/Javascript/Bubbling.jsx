import React from "react";

const Bubbling = () => {
  return (
    <div className="h-screen flex flex-row justify-center items-center">
      <div
        className="w-96 h-96 border border-black flex flex-col justify-center items-center"
        onClickCapture={(e) => {
          console.log("div 1 clicked");
        }}
      >
        <span className="mb-5">Div 1</span>
        <div
          className="w-64 h-64 border border-black flex flex-col justify-center items-center"
          onClick={(e) => {
            // e.stopPropagation();
            // console.log("e.target", e.target);

            console.log("div 2 clicked");
          }}
        >
          <span className="mb-16">Div 2</span>
          <button
            className="bg-slate-600 p-2 text-white"
            onClick={(e) => {
              //   console.log("e.currentTarget", e.currentTarget);
              console.log("button clicked");
            }}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bubbling;
