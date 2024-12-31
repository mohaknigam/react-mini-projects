import React, { useEffect } from "react";

const Scroller = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.backgroundColor = "red";
          }
        });
      },
      {
        threshold: 1.0,
      }
    );

    const target = document.querySelector("#targetNode");
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center border w-[700px] h-[700px]">
        First
      </div>
      <div className="flex justify-center items-center border w-[700px] h-[700px]">
        Second
      </div>
      <div
        className="flex justify-center items-center border w-[700px] h-[700px]"
        id="targetNode"
      >
        Third
      </div>
      <div className="flex justify-center items-center border w-[700px] h-[700px]">
        Fourth
      </div>
    </div>
  );
};

export default Scroller;
