import React from "react";
import { useFilterContext } from "../contexts/FilterContext";


const SingleFilter = ({layer, trait}) => {
  const setFilters = useFilterContext().setFilters;

  const clearFilter = () => {
    setFilters(prevState => {
      const newState = {...prevState};
      newState[layer][trait] = false;
      return newState
    })
  }

  return (
    <div className="single-filter">
      <p>{layer}: {trait}</p>
      <button onClick={clearFilter}>X</button>
    </div>
  )
};

export default SingleFilter;