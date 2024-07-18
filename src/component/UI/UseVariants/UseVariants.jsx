import React, { useState } from "react";
import { ReactComponent as HeartIcon } from "../../../icons/heart_check.svg";

const UseVariants = () => {
  const [activeButton, setActiveButton] = useState("Tiles");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-white border flex w-[253px] h-[30px] justify-between rounded items-center">
      <button
        className={`h-full px-2 rounded ${
          activeButton === "Tiles" && "bg-[#FECC00]"
        }`}
        onClick={() => handleClick("Tiles")}
      >
        Tiles
      </button>
      <button
        className={`h-full px-2 rounded ${
          activeButton === "Paint" && "bg-[#FECC00]"
        }`}
        onClick={() => handleClick("Paint")}
      >
        Paint
      </button>
      <button
        className={`h-full px-2 rounded ${
          activeButton === "Wallpaper" && "bg-[#FECC00]"
        }`}
        onClick={() => handleClick("Wallpaper")}
      >
        Wallpaper
      </button>
    </div>
  );
};

export default UseVariants;
