import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../icons/search.svg";

const MainSearch = ({ queryMain, handleChangeMain }) => {
  const [color, setColor] = useState("#D9D9D9");
  const [focus, setFocus] = useState(false);

  const handleMouseEnter = () => {
    if (!focus) {
      setColor("#FF8642");
    }
  };

  const handleMouseLeave = () => {
    if (!focus) {
      setColor(queryMain ? "#1C1C1C" : "#D9D9D9");
    }
  };

  const handleFocus = () => {
    setFocus(true);
    setColor("#FF5C00");
  };

  const handleBlur = () => {
    setFocus(false);
    setColor(queryMain ? "#1C1C1C" : "#D9D9D9");
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={queryMain}
        className={`w-[149px] pl-2 pr-6 py-1 border rounded text-[#1C1C1C] placeholder-[#787878]
                    ${queryMain ? `border-[#1C1C1C]` : `border-[#D9D9D9]`}
                    focus:border-[#FF5C00] focus:text-[#FF5C00] focus:outline-none
                    hover:border-[#FF8642] hover:text-[#FF8642]`}
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onChange={handleChangeMain}
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <SearchIcon fill={color} />
      </div>
    </div>
  );
};

export default MainSearch;
