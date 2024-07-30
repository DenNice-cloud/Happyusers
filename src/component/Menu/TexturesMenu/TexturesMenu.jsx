import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  SaveButton,
  OwnTextureButton,
  MainSearch,
  UseVariants,
  Breadcrumbs,
  ExpandColorIcon,
  FilterIcon,
  ExpandSortIcon,
} from "component/ui";
import { FilterMenu, FilterSection } from "component/menu";

const TexturesMenu = ({
  setSelectedTexture,
  setActiveButton,
  setSelectedColor,
}) => {

  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  const [displayBrands, setDisplayBrands] = useState([]);
  const [data, setData] = useState();
  const [menuFound, setMenuFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      setMenuFound(false);

      if (lastSegment === "tiles") {
        response = await fetch("https://happyusersback-production.up.railway.app/textures/tiles");
      } else if (lastSegment === "paint") {
        response = await fetch("https://happyusersback-production.up.railway.app/textures/paint");
      } else {
        setMenuFound(true);
        return;
      }
      const result = await response.json();

      const unifiedData = {
        textures: lastSegment === "tiles" ? result.tiles : result.paint,
        filters: lastSegment === "tiles" ? result.tilesFilters : result.paintFilters,
        brands: result.brands || [],
      };
      setData(unifiedData);
      setDisplayBrands(unifiedData.brands || []);
    };

    fetchData();
  }, [lastSegment]);

  const { textures = [], filters = [], brands = [] } = data || {};
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

    setShowMoreFilters(() => ({
      colorsFilter: false,
      sizeFilter: false,
      lookFilter: false,
    }));
  };

  const handleClickSortBrands = () => {
    const sortedBrands = [...displayBrands].sort((a, b) => {
      const keyA = Object.keys(a)[0];
      const keyB = Object.keys(b)[0];
      return keyA.localeCompare(keyB);
    });

    setDisplayBrands(isSorted ? sortedBrands : sortedBrands.reverse());
    setIsSorted(!isSorted);
  };

  const handleChangeMain = (event) => {
    const newQuery = event.target.value;
    setQueryMain(newQuery);

    let filteredBrands = brands;

    if (newQuery) {
      filteredBrands = filteredBrands?.filter((brand) =>
        Object.keys(brand).some((key) =>
          key.toLowerCase().includes(newQuery.toLowerCase())
        )
      );
    }

    setDisplayBrands(filteredBrands || []);
  };

  return !isFilterButtonActive ? (
    <div className="absolute flex rounded-lg w-[605px] min-h-[664px] bg-[#FFFFFF] mx-4 my-4 overflow-hidden">
      {menuFound ? (
        <div className="p-4">
          <Breadcrumbs setActiveButton={setActiveButton} />
          <UseVariants />

          <div>Not found items</div>
        </div>
      ) : (
        <>
          <div className="p-4">
            <Breadcrumbs setActiveButton={setActiveButton} />
            <UseVariants />

            <div className="flex space-x-4">
              <MainSearch
                queryMain={queryMain}
                handleChangeMain={handleChangeMain}
              />
              <SaveButton />
            </div>

            <div className="flex py-4 justify-between items-center ">
              <span className="flex font-bold">{`${displayBrands.length} shops`}</span>
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

            <ul className="py-2 overflow-y-auto h-[370px]">
              {displayBrands.map((brand) => (
                <li
                  key={Object.keys(brand)}
                  className="py-2"
                >
                  <span className="font-semibold">{`${Object.keys(
                    brand
                  )} `}</span>
                  <span className="text-[#787878]">{`(${Object.values(
                    brand
                  )})`}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center pt-4">
              <OwnTextureButton />
            </div>
          </div>

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
                {textures.map((texture, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center"
                    onClick={() => setSelectedTexture(texture.texture)}
                  >
                    <img
                      className="rounded w-[76px] h-[76px]"
                      src={`${texture.texture}`}
                      alt="a"
                    />
                    <span className="text-left text-xs">{texture.title}</span>
                  </button>
                ))}
              </div>
            </div>

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
                            <button
                              key={index}
                              className="border rounded h-4 w-4 mr-3 mb-2"
                              style={{ backgroundColor: color }}
                              onClick={() => setSelectedColor(color)}
                            ></button>
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
        </>
      )}
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
