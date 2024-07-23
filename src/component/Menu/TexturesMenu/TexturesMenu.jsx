import React, { useState } from "react";
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs";
import UseVariants from "../../UI/UseVariants/UseVariants";
import MainSearch from "../../UI/MainSearch/MainSearch";
import OwnTextureButton from "../../UI/OwnTextureButton/OwnTextureButton";
import SaveButton from "../../UI/SaveButton/SaveButton";
import loadIcon from "../../UI/IconLoader/iconLoader";
import FilterMenu from "../FilterMenu/FilterMenu";
import FilterSection from "../FilterSection/FilterSection";

const TexturesMenu = () => {
  // OBJECTS
  const brands = [
    { Hamiltoncarpetone_1: 3214 },
    { Marcacorona_1: 7738 },
    { Tileshop_1: 9423 },
    { Floorlife_1: 5826 },
    { Hamiltoncarpetone_2: 3214 },
    { Marcacorona_2: 7738 },
    { Tileshop_2: 9423 },
    { Floorlife_2: 5826 },
    { Hamiltoncarpetone_3: 3214 },
  ];

  // OBJECTS
  const tiles = [
    "name1 some color",
    "name2 some color",
    "name3 some color",
    "name1 some color",
    "name2 some color",
    "name3 some color",
    "name1 some color",
    "name2 some color",
    "name3 some color",
  ];

  // OBJECTS
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
        middle2: ["Subway1", "5"],
        middle3: ["Subway1", "5"],
        middle4: ["Subway1", "5"],
        middle5: ["Subway1", "5"],
      },
    },
  ];

  const ExpandColorIcon = loadIcon("ExpandColorIcon");
  const FilterIcon = loadIcon("FilterIcon");
  const ExpandSortIcon = loadIcon("ExpandSortIcon");

  const [displayBrands, setDisplayBrands] = useState([...brands]);
  const [isSorted, setIsSorted] = useState(false);
  const [queryMain, setQueryMain] = useState("");

  const [isFilterButtonActive, setIsFilterButtonActive] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    colorsFilter: false,
    sizeFilter: false,
    lookFilter: false,
  });
  const [showMoreFilters, setShowMoreFilters] = useState({
    sizeFilter: false,
    lookFilter: false,
  });

  const handleFilterToggle = (filter) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleFilterMenuClick = () => {
    setIsFilterButtonActive(!isFilterButtonActive);

    setShowMoreFilters((prevFilters) => ({
      colorsFilter: false,
      sizeFilter: false,
      lookFilter: false,
    }));
  };

  const handleClickSortBrands = () => {
    let sorted;

    if (isSorted) {
      sorted = queryMain
        ? [...brands].filter((brand) =>
            Object.keys(brand).some((key) =>
              key.toLowerCase().includes(queryMain)
            )
          )
        : [...brands];
    } else {
      sorted = [...displayBrands].sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
      });
    }

    setDisplayBrands(sorted);
    setIsSorted(!isSorted);
  };

  const handleChangeMain = (event) => {
    const newQuery = event.target.value;
    setQueryMain(newQuery);

    let findNewQuery = [...brands];

    if (newQuery) {
      findNewQuery = [...brands].filter((brand) =>
        Object.keys(brand).some((key) => key.toLowerCase().includes(newQuery))
      );
    }

    setDisplayBrands(findNewQuery);
  };

  return !isFilterButtonActive ? (
    <div className="absolute flex rounded-lg w-[605px] min-h-[664px] bg-[#FFFFFF] mx-4 my-4 overflow-hidden">
      {/* Left bar */}
      <div className="p-4">
        <Breadcrumbs />
        <UseVariants />

        <div className="flex space-x-4">
          <MainSearch
            queryMain={queryMain}
            handleChangeMain={handleChangeMain}
          />
          <SaveButton />
        </div>

        <div className="flex py-4 justify-between items-center ">
          <span className="flex font-bold">81 shops</span>
          <button
            className="flex items-center"
            onClick={handleClickSortBrands}
          >
            sort by alphabet
            <ExpandSortIcon
              className={`ml-2 ${isSorted ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <ul className="py-4">
          {displayBrands.map((brand) => (
            <li
              key={Object.keys(brand)}
              className="py-2"
            >
              <span className="font-semibold">{`${Object.keys(brand)} `}</span>
              <span className="text-[#787878]">{`(${Object.values(
                brand
              )})`}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <OwnTextureButton />
        </div>
      </div>

      {/* Right bar 1 */}
      <div className="w-2/3 py-4 relative overflow-hidden">
        <div className="pr-4 ">
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

          <div className="grid grid-cols-3 gap-4 absolute pr-2 overflow-y-auto h-[360px]">
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
        <div className="absolute inset-x-0 top-2/3 bg-[#FFFFFF] overflow-y-auto h-[200px]">
          {filters
            .slice(
              0,
              filters.some((filter) => filter.name === "Colors") ? 2 : 3
            )
            .map((filter, index) => (
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
      </div>
    </div>
  ) : (
    <FilterMenu
      filters={filters}
      handleFilterToggle={handleFilterToggle}
      activeFilters={activeFilters}
      showMoreFilters={showMoreFilters}
      setShowMoreFilters={setShowMoreFilters}
      handleFilterMenuClick={handleFilterMenuClick}
    />
  );
};

export default TexturesMenu;
