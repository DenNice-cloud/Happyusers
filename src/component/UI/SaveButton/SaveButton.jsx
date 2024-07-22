import React, { useState } from "react";
import { ReactComponent as HeartIcon } from "../../../icons/heart_check.svg";

const SaveButton = () => {
  const [color, setColor] = useState("#1C1C1C");
  const [click, setClick] = useState(false);

  const handleMouseEnter = () => {
    setColor("#FF5C00");
  };

  const handleMouseLeave = () => {
    if (!click) {
      setColor("#1C1C1C");
    }
  };

  const handledClick = () => {
    setClick(!click);

    if (click) {
      setColor("#1C1C1C");
    } else {
      setColor("#787878");
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
          fill={color}
        />
      </span>
    </button>
  );
};

export default SaveButton;
