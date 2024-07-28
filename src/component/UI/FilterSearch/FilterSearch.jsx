import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "icons/search.svg";

const FilterSearch = ({queryMain, handleChangeMain}) => {
  const [colorFilter, setColorFilter] = useState("#D9D9D9");
  const [focus, setFocus] = useState(false);

  const handleMouseEnter = () => {
    if (!focus) {
      setColorFilter("#FF8642");
    }
  };

  const handleMouseLeave = () => {
    if (!focus) {
      setColorFilter(queryMain ? "#1C1C1C" : "#D9D9D9");
    }
  };

  const handleFocus = () => {
    setFocus(true);
    setColorFilter("#FF5C00");
  };

  const handleBlur = () => {
    setFocus(false);
    setColorFilter(queryMain ? "#1C1C1C" : "#D9D9D9");
  };

  return (
    <div className="relative flex items-center py-2">
      <input
        type="text"
        value={queryMain}
        className={`w-full pl-2 pr-6 py-2 border rounded text-[#1C1C1C] placeholder-[#787878]
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

      <SearchIcon
        className="absolute right-3 pointer-events-none"
        fill={colorFilter}
      />
    </div>
  );
};

export default FilterSearch;
