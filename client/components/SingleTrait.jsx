import React, { useState } from "react";
import { FaArrowRight, FaArrowDown} from 'react-icons/fa';
import { CSSTransition } from "react-transition-group";
import allTraitNames from '../assets/trait_names.json'
import TraitName from './TraitName'

const SingleTrait = ({ layer }) => {
  const [dropState, setDropState] = useState(false);

  function changeDrop() {
    setDropState(prevState => !prevState)
  }

  const icon = dropState ? 
  <FaArrowDown className="arrow-icon"></FaArrowDown> : 
  <FaArrowRight className="arrow-icon"></FaArrowRight>;

  let traitsList = []
  for (let uniqueTrait of allTraitNames[layer]){
    traitsList.push(<TraitName name={uniqueTrait} layer={layer}></TraitName>)
  }
  if (layer === 'Earring') traitsList = traitsList.slice(0, 1)
  if (layer === 'Eyes') traitsList = traitsList.slice(1)
  return(
    <div className='single-trait'>
      <div className="trait-title" onClick={() => changeDrop()}>
        {icon}
        <h3>{layer}</h3>
      </div>
      <CSSTransition in={dropState === true}
      unmountOnExit
      timeout={500}
      classNames='traitvalues'>
        <div className="names-container">
        {traitsList}
        </div>
      </CSSTransition>
    </div>
  );
}

export default SingleTrait