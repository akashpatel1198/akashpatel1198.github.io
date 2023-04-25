import React, { useContext, useState } from 'react';
import allTraitNames from '../assets/trait_names.json'

const FilterContext = React.createContext();

export function useFilterContext() {
  return useContext(FilterContext)
}

export function FilterContextProvider({ children }) {
  const layers = Object.keys(allTraitNames);

  const defaultFilters = {};

  for (let layer of layers){
    const currentState = {};
    for (let name of allTraitNames[layer]){
      currentState[name] = false;
    }
    defaultFilters[layer] = currentState;
  }

  const [filters, setFilters] = useState(defaultFilters)
  

  return (
    <FilterContext.Provider value={{filters, setFilters}}>
      {children}
    </FilterContext.Provider>
  );
  }