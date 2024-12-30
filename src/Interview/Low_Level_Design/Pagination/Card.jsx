import React from "react";

const Card = ({ imgUrl, title }) => {
  return (
    <div className="flex flex-col border w-96 h-96 justify-around items-center">
      <img src={imgUrl} alt="product" className="h=40 w-40" />
      <p className="bg-gray-300 w-full text-center">{title}</p>
    </div>
  );
};

export default Card;
