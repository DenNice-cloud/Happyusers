import React, { useState } from "react";
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs";
import UseVariants from "../../UI/UseVariants/UseVariants";
import MainSearch from "../../UI/MainSearch/MainSearch";
import OwnTextureButton from "../../UI/OwnTextureButton/OwnTextureButton";
import SaveButton from "../../UI/SaveButton/SaveButton";
import FilterSearch from "../../UI/FilterSearch/FilterSearch";
import loadIcon from "../../UI/IconLoader/iconLoader";
import ShowMoreButton from "../../UI/ShowMoreButton/ShowMoreButton";
import FilterMenu from "../FilterMenu/FilterMenu";

const TexturesMenu = () => {
  // OBJECTS
  const brands = {
    Hamiltoncarpetone_1: [3214],
    Marcacorona_1: [7738],
    Tileshop_1: [9423],
    Floorlife_1: [5826],
    Hamiltoncarpetone_2: [3214],
    Marcacorona_2: [7738],
    Tileshop_2: [9423],
    Floorlife_2: [5826],
    Hamiltoncarpetone_3: [3214],
  };

  const tiles = [
    "name1 some color",
    "name2 some color",
    "name2 some color",
    "name2 some color",
    "name2 some color",
    "name2 some color",
    "name2 some color",
    "name2 some color",
    "name2 some color",
    "name2 some color",
    "name3 some color",
    "name3 some color",
    "name3 some color",
    "name3 some color",
    "name3 some color",
    "name3 some color",
  ];

  const filters = [
    {
      name: "Colors",
      content: [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FF00FF",
        "#00FFFF",
        "#000000",
        "#FFFFFF",
        "#FFA500",
      ],
    },
    {
      name: "Size",
      content: {
        the_smallerst: ["3 x 6", "4"],
        smaller: ["4 x 12", "20"],
        small: ["12 x 12", "12"],
        middle: ["12 x 24", "421"],
      },
    },
    {
      name: "Look",
      content: {
        small: ["Subway", "4"],
        middle: ["Subway1", "5"],
      },
    },
  ];

  const ExpandColorIcon = loadIcon("ExpandColorIcon");
  const FilterIcon = loadIcon("FilterIcon");
  const ExpandSortIcon = loadIcon("ExpandSortIcon");

  const [isFilterButtonActive, setIsFilterButtonActive] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    colorFilter: false,
    sizeFilter: false,
    lookFilter: false,
  });

  const handleFilterToggle = (filter) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const [showMoreFilters, setShowMoreFilters] = useState({
    sizeFilter: false,
    lookFilter: false,
  });

  const handleFilterMenuClick = () => {
    setIsFilterButtonActive(!isFilterButtonActive);
  };

  console.log(isFilterButtonActive);

  return !isFilterButtonActive ? (
    <div className="absolute flex rounded-lg w-[605px] max-h-[654px] bg-[#FFFFFF] mx-4 my-4 overflow-hidden">
      {/* Left bar */}
      <div className="p-4">
        <Breadcrumbs />
        <UseVariants />

        <div className="flex space-x-4">
          <MainSearch />
          <SaveButton />
        </div>

        <div className="flex py-4 justify-between items-center ">
          <span className="flex font-bold">81 shops</span>
          <button className="flex items-center">
            sort by alphabet
            <ExpandSortIcon className="ml-2" />
          </button>
        </div>

        <ul className="py-4">
          {Object.keys(brands).map((brand) => (
            <li
              key={brand}
              className="py-2"
            >
              <span className="font-semibold">{`${brand} `}</span>
              <span className="text-[#787878]">{`(${brands[brand]})`}</span>
            </li>
          ))}
        </ul>

        <OwnTextureButton />
      </div>

      {/* Right bar 1 */}
      <div className="w-2/3 py-4 relative overflow-hidden">
        <div className="pr-4 overflow-y-auto h-[400px]">
          <div className="flex py-4 justify-between">
            <span className="font-bold text-[#787878]">124,214 items</span>

            <button
              className="flex items-center"
              onClick={handleFilterMenuClick}
            >
              Filter
              <FilterIcon className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {tiles.map((tile, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <button className="rounded w-[76px] h-[76px] bg-black"></button>
                <span className="text-center">{tile}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right bar 2 */}
        <div className="absolute inset-x-0 bottom-0 bg-[#FFFFFF] overflow-y-auto h-[220px]">
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
                  <span className="ml-2 text-[#787878]">
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
                          ? console.error(
                              `Not enough elements if ${filter.name.toLowerCase()} Filter`
                            )
                          : 2
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

                          <span className="ml-2 text-[#787878]">
                            {`(${content[1]})`}
                          </span>
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
      </div>
    </div>
  ) : (
    <FilterMenu
      filters={filters}
      handleFilterToggle={handleFilterToggle}
      activeFilters={activeFilters}
      ShowMoreButton={ShowMoreButton}
      showMoreFilters={showMoreFilters}
      setShowMoreFilters={setShowMoreFilters}
      handleFilterMenuClick={handleFilterMenuClick}
    />
  );
};

export default TexturesMenu;
