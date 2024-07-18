import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../icons/search.svg";

const FilterSearch = () => {
  const [color, setColor] = useState("#D9D9D9");
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");

  const handleMouseEnter = () => {
    if (!focus) {
      setColor("#FF8642");
    }
  };

  const handleMouseLeave = () => {
    if (!focus) {
      setColor(query ? "#1C1C1C" : "#D9D9D9");
    }
  };

  const handleFocus = () => {
    setFocus(true);
    setColor("#FF5C00");
  };

  const handleBlur = () => {
    setFocus(false);
    setColor(query ? "#1C1C1C" : "#D9D9D9");
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex px-4 py-[10px] flex items-center">
      <input
        type="text"
        value={query}
        className={`w-[149px] pr-6 pl-2 py-2 border rounded text-[#1C1C1C] placeholder-[#787878]
                    ${query ? `border-[#1C1C1C]` : `border-[#D9D9D9]`}
                    focus:border-[#FF5C00] focus:text-[#FF5C00] focus:outline-none
                    hover:border-[#FF8642] hover:text-[#FF8642]`}
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onChange={handleChange}
      />
      <SearchIcon
        className="relative right-5 pointer-events-none"
        fill={color}
      />
    </div>
  );
};

export default FilterSearch;
