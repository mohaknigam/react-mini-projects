import React, { useState } from "react";

const BlockSelector = () => {
  const [wallpaperColor, setWallpaperColor] = useState("#ffffff");
  const colours = [
    {
      id: 1,
      colorCode: "#000000",
    },
    {
      id: 2,
      colorCode: "#dc2626",
    },
    {
      id: 3,
      colorCode: "#16a34a",
    },
    {
      id: 4,
      colorCode: "#0d9488",
    },
  ];

  const handleClick = (color_Code) => {
    setWallpaperColor(color_Code);
  };

  return (
    <div
      className="flex h-screen justify-center items-center"
      style={{
        backgroundColor: wallpaperColor,
      }}
    >
      {colours.map((item) => {
        return (
          <div
            id={item.id}
            className="w-60 h-60"
            style={{ backgroundColor: item?.colorCode }}
            onClick={() => handleClick(item.colorCode)}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default BlockSelector;
