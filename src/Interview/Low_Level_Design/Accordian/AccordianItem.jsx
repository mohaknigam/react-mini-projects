import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const AccordianItem = ({ title, description, isOpen, handleTitleClick }) => {
  return (
    <div className=" w-[50%] m-auto border">
      <div
        className="flex justify-between border bg-gray-200 cursor-pointer"
        onClick={() => handleTitleClick()}
      >
        <span>{title}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
};

export default AccordianItem;
