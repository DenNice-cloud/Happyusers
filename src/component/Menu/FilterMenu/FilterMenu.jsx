import React from "react";
// import loadIcon from "../../ui/IconLoader/IconLoader";
// import ApplyButton from "../../ui/ApplyButton/ApplyButton";
// import FilterSection from "../FilterSection/FilterSection";

import { FilterSection } from "component/menu";
import { ApplyButton, ExpandIcon, ExpandColorIcon } from "component/ui";

const FilterMenu = ({
  filters,
  handleFilterToggle,
  activeFilters,
  showMoreFilters,
  setShowMoreFilters,
  handleFilterMenuClick,
}) => {
  // const {
  //   ExpandColorIcon,
  //   ExpandIcon,
  // } = IconLoader;

  return (
    <div className="absolute rounded-lg w-[279px] min-h-[664px] bg-white mx-4 my-4 overflow-hidden py-4 pl-4 pr-2 flex flex-col">
      <button
        className="flex items-center text-xl font-bold"
        onClick={handleFilterMenuClick}
      >
        <ExpandIcon className="w-[12px] h-[12px] m-2" />
        Filter
      </button>

      <div className="inset-x-0 bottom-0 bg-white overflow-y-auto h-[544px] my-4">
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

              <ExpandColorIcon
                className={`${
                  activeFilters[`${filter.name.toLowerCase()}Filter`]
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {activeFilters[`${filter.name.toLowerCase()}Filter`] &&
              (filter.name === "Colors" ? (
                <div className="flex flex-wrap py-2">
                  {filter.content.map((color, index) => (
                    <div
                      key={index}
                      className="border rounded h-4 w-4 mr-3 mb-2"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              ) : (
                <FilterSection
                  filter={filter}
                  showMoreFilters={showMoreFilters}
                  setShowMoreFilters={setShowMoreFilters}
                />
              ))}
          </div>
        ))}
      </div>

      <button
        className="flex justify-center "
        onClick={handleFilterMenuClick}
      >
        <ApplyButton />
      </button>
    </div>
  );
};

export default FilterMenu;
