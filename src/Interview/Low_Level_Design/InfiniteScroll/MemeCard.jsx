import React from "react";

const MemeCard = ({ url }) => {
  return <img className="w-80 h-80 p-2 border" src={url} alt="meme" />;
};

export default MemeCard;
