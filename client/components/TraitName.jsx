import React from "react";
import { useFilterContext } from "../contexts/FilterContext";

const TraitName = ({name, layer}) => {
  const filters = useFilterContext().filters;
  const setFilters = useFilterContext().setFilters;

  let isChecked = filters[layer][name]

  const handleChange = () => {
    setFilters(prevState => {
      const newState = {...prevState}
      newState[layer] = {...prevState[layer]};
      newState[layer][name] = !newState[layer][name];
      return newState
    })
  }

  return(
    <div className="value">
      <span>{name}</span>
      <input type="checkbox" defaultChecked={isChecked} onChange={handleChange}></input>
    </div>
  )
}

export default TraitName;