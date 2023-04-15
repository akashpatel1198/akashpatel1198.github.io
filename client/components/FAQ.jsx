import React, {useState } from "react";
import { FaArrowRight, FaArrowDown} from 'react-icons/fa';
import { CSSTransition } from "react-transition-group";

const FAQ = () => {
  const [dropState, setDropState] = useState([false, false, false])

  function changeDrop(id) {
    setDropState(prevState => {
      const newState = [...prevState];
      newState[id] = !newState[id];
      return newState;
    })
  }

  const icons = [
    dropState[0] ? 
    <FaArrowDown className="arrow-icon"></FaArrowDown> : 
    <FaArrowRight className="arrow-icon"></FaArrowRight>,
    dropState[1] ? 
    <FaArrowDown className="arrow-icon"></FaArrowDown> : 
    <FaArrowRight className="arrow-icon"></FaArrowRight>,
    dropState[2] ? 
    <FaArrowDown className="arrow-icon"></FaArrowDown> : 
    <FaArrowRight className="arrow-icon"></FaArrowRight>
  ]

  return (
    <div id="faq">
      <h1>FAQ</h1>
      <div id='dropdown'>
        <div className="droprow" onClick={() => changeDrop(0)}>
          {icons[0]}
          <h3>Why?</h3>
        </div>
        <CSSTransition in={dropState[0] === true}
        unmountOnExit
        timeout={500}
        classNames='droptext'>
          <p>DCLA holds the keys to fullsend.eth, nelk.eth, and stevewilldoit.eth</p>
        </CSSTransition>
        <div className="droprow" onClick={() => changeDrop(1)}>
          {icons[1]}
          <h3>Why?</h3>
        </div>
        <CSSTransition in={dropState[1] === true}
        unmountOnExit
        timeout={500}
        classNames='droptext'>
          <p>We’re aiming to use these assets as tools to empower the SC and Metacard Community while furthering the FS Brand</p>
        </CSSTransition>
        <div className="droprow" onClick={() => changeDrop(2)}>
          {icons[2]}
          <h3>Why?</h3>
        </div>
        <CSSTransition in={dropState[2] === true}
        unmountOnExit
        timeout={500}
        classNames='droptext'>
          <p>We’ve been active members of the Web 3 community for over 2 years now</p>
        </CSSTransition>
      </div>
    </div>
  );
};

export default FAQ;