import React, { useState } from "react";

const ShowMoreButton = ({ filter, showMoreFilters, setShowMoreFilters }) => {
  const handleShowMoreToggle = (filter) => {
    setShowMoreFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <div className="flex justify-center mt-2">
      <button
        className="rounded-full bg-[#FECC00] px-4 py-2"
        onClick={() =>
          handleShowMoreToggle(`${filter.name.toLowerCase()}Filter`)
        }
      >
        {showMoreFilters[`${filter.name.toLowerCase()}Filter`]
          ? "Show less"
          : "Show more +"}
      </button>
    </div>
  );
};

export default ShowMoreButton;
