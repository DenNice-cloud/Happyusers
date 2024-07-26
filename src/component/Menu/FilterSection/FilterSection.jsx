import FilterSearch from "../../ui/FilterSearch/FilterSearch";
import React, { useState } from 'react';
import ShowMoreButton from "../../ui/ShowMoreButton/ShowMoreButton";

const FilterSection = ({
  filter,
  showMoreFilters,
  setShowMoreFilters,
}) => {
    const filterName = `${filter.name.toLowerCase()}Filter`;
    const showMore = showMoreFilters[filterName];
    const contentEntries = Object.entries(filter.content);
    const [query, setQuery] = useState("");
    const [displayFilterValue, setDisplayFilterValue] = useState(contentEntries);

    const handleChangeMain = (event) => {
      const newQuery = event.target.value.toLowerCase();
      setQuery(newQuery);
  
      if (newQuery) {
        const filteredEntries = contentEntries.filter(([key, content]) =>
          content[0].toLowerCase().includes(newQuery)
        );
        setDisplayFilterValue(filteredEntries);
      } else {
        setDisplayFilterValue(contentEntries);
      }
    };

    return (
      <div>
        <FilterSearch 
          query={query}
          handleChangeMain={handleChangeMain}
        />

        {displayFilterValue
          .slice(0, showMore ? displayFilterValue.length : 3)
          .map(([key, content]) => (
            <label key={key} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {content[0]}
              <span className="ml-2 text-gray-500">{`(${content[1]})`}</span>
            </label>
          ))}

        {contentEntries.length > 3 && (
          <ShowMoreButton
            filter={filter}
            setShowMoreFilters={setShowMoreFilters}
            showMoreFilters={showMoreFilters}
          />
        )}
      </div>
    );
};

export default FilterSection;
