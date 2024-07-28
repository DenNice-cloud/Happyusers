import React, { useState } from "react";
import { ReactComponent as HeartIcon } from "icons/heart_check.svg";

const SaveButton = () => {
  const [colorButton, setColorButton] = useState("#1C1C1C");
  const [click, setClick] = useState(false);

  const handleMouseEnter = () => {
    setColorButton("#FF5C00");
  };

  const handleMouseLeave = () => {
    if (!click) {
      setColorButton("#1C1C1C");
    }
  };

  const handledClick = () => {
    setClick(!click);

    if (click) {
      setColorButton("#1C1C1C");
    } else {
      setColorButton("#787878");
    }
  };

  return (
    <button
      className={`py-1 w-auto rounded
        border hover:border-[#FF5C00]
        ${
          click
            ? "border-[#787878] text-[#787878]"
            : "border-[#1C1C1C] text-[#1C1C1C]"
        }
        `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handledClick}
    >
      <span className={`bg-[#FFFFFF] flex items-center justify-center px-5`}>
        Saved
        <HeartIcon
          className="ml-2"
          fill={colorButton}
        />
      </span>
    </button>
  );
};

export default SaveButton;
