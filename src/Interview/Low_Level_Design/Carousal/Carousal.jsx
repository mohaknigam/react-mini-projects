import React, { useEffect, useState } from "react";
import { images } from "../../Constants";

const Carousal = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const handleNextClick = () => {
    setActiveIdx((prev) => (prev + 1) % images.length);
  };
  const handlePreviousClick = () => {
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNextClick();
    }, 2000);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [activeIdx]);
  return (
    <div className="flex flex-row gap-5 justify-center h-screen items-center">
      <button className="h-10 w-20 bg-gray-300" onClick={handlePreviousClick}>
        Prev
      </button>
      {images.map((item, idx) => (
        <img
          key={item?.id}
          className={`h-80 w-80 ${idx === activeIdx ? "" : "hidden"}`}
          src={images[idx].imageUrl}
          alt="image"
        />
      ))}
      <button className="h-10 w-20 bg-gray-300" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Carousal;
