import React from "react";

const PageNumbers = ({ currPage, setCurrPage }) => {
  const handleNextClick = () => {
    setCurrPage((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    setCurrPage((prev) => prev - 1);
  };
  return (
    <div className="flex flex-row items-center justify-center gap-10 w-80 text-xl">
      <button
        className={`h-30 w-30 p-2 bg-gray-300 ${
          currPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevClick}
        disabled={currPage === 1}
      >
        Prev
      </button>
      <div className="flex flex-row gap-5 justify-stretch">
        {Array(10)
          .fill("")
          .map((_, idx) => (
            <span
              key={idx}
              className={`cursor-pointer ${
                idx + 1 === currPage ? "text-blue-600 underline" : ""
              }`}
              onClick={() => setCurrPage(idx + 1)}
            >
              {idx + 1}
            </span>
          ))}
      </div>
      <button
        className={`h-30 w-30 p-2 bg-gray-300 ${
          currPage === 10 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNextClick}
        disabled={currPage === 10}
      >
        Next
      </button>
    </div>
  );
};

export default PageNumbers;
