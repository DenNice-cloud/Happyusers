import React, { useState } from "react";
import FilterSearch from "../../UI/FilterSearch/FilterSearch";
import loadIcon from "../../UI/IconLoader/iconLoader";
import ApplyButton from "../../UI/ApplyButton/ApplyButton";

const FilterMenu = ({
  filters,
  handleFilterToggle,
  activeFilters,
  ShowMoreButton,
  showMoreFilters,
  setShowMoreFilters,
  handleFilterMenuClick,
}) => {
  const ExpandColorIcon = loadIcon("ExpandColorIcon");
  const ExpandIcon = loadIcon("ExpandIcon");

  return (
    <div className="absolute rounded-lg w-[279px] max-h-[654px] bg-white mx-4 my-4 overflow-hidden py-4 pl-4 pr-2">
      <button
        className="flex items-center justify-center text-xl font-bold"
        onClick={handleFilterMenuClick}
      >
        <ExpandIcon className="w-[12px] h-[12px] m-2" />
        Filter
      </button>

      <div className="inset-x-0 bottom-0 bg-white overflow-y-auto h-[500px] my-4">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="pb-2 pr-4"
          >
            <button
              className="flex justify-between items-center w-full"
              onClick={() =>
                handleFilterToggle(`${filter.name.toLowerCase()}Filter`)
              }
            >
              <div className="flex">
                <span>{filter.name}</span>
                <span className="ml-2 text-gray-500">
                  {Object.values(filter.content).length}
                </span>
              </div>
              <ExpandColorIcon />
            </button>

            {activeFilters[`${filter.name.toLowerCase()}Filter`] &&
              (filter.name === "Colors" ? (
                <div className="flex flex-wrap py-2">
                  {filter.content.map((color, index) => (
                    <div
                      key={index}
                      className="rounded h-4 w-4 mr-3 mb-2"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              ) : (
                <div>
                  <FilterSearch />
                  {Object.entries(filter.content)
                    .slice(
                      0,
                      showMoreFilters[`${filter.name.toLowerCase()}Filter`]
                        ? undefined
                        : 3
                    )
                    .map(([key, content]) => (
                      <label
                        key={key}
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                        />
                        {content[0]}
                        <span className="ml-2 text-gray-500">{`(${content[1]})`}</span>
                      </label>
                    ))}
                    
                  {Object.entries(filter.content).length > 3 && (
                    <ShowMoreButton
                      filter={filter}
                      setShowMoreFilters={setShowMoreFilters}
                      showMoreFilters={showMoreFilters}
                    />
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>

      <div>
        <ApplyButton />
      </div>
    </div>
  );
};

export default FilterMenu;
