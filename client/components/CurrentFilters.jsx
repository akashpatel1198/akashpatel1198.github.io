import React from "react";
import SingleFilter from "./SingleFilter";
import { useFilterContext } from "../contexts/FilterContext";


const CurrentFilters = () => {
  const filters = useFilterContext().filters
  const setFilters = useFilterContext().setFilters;

  const filtersArr = []

  for (let layer in filters) {
    for (let trait in filters[layer]) {
      if (filters[layer][trait]) {
        filtersArr.push(
          <SingleFilter layer={layer} trait={trait}></SingleFilter>
        );
      };
    };
  };

  const clearAll = () => {
    setFilters(prevState => {
      const newState = {...prevState};
      for (let layer in newState) {
        for (let trait in newState[layer]) {
          newState[layer][trait] = false;
        }
      }
      return newState
    })
  }

  return (
    <div id="current-main">
      <div id="current-top">
        <h3>Current Filters</h3>
        <button onClick={clearAll}>Clear All</button>
      </div>
      <div id="current-filters">
        {filtersArr.length? filtersArr :
        <h4>No Filters</h4>}
      </div>
    </div>
  );
};

export default CurrentFilters;