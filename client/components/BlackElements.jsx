import React from "react";
import { useInView, a } from '@react-spring/web';
import AvatarRow from "./AvatarRow";
import Fire from "../../images/Fire_Icon.png"
import Ice from "../../images/Ice_Icon.png"
import Water from "../../images/Water_Icon.png"
import Leaf from "../../images/Leaf_Icon.png"

const BlackElements = () => {
  const [refLeft, springsLeft] = useInView(
    () => ({
      config: {
        duration: 400,
      },
      from: {
        opacity: 0,
        x: -140,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: '-20% 0%',
      once: true
    }
  )

  return (
    <div id="black-section">
      <h1>Phase 1: Send Elements</h1>
      <p>Send Elements is a collection of 10k unique Elementalist Avatars on the Ethereum Blockchain</p>
      <div id='icon-row'>
        <a.p ref={refLeft} style={springsLeft}>
          Each individual element hosts a rare unique resource that fills the consumer with immense power and breathtaking euphoria, leading them into a state of Full Send
        </a.p>
        <img src={Leaf}></img>
        <img src={Water}></img>
        <img src={Ice}></img>
        <div></div>
      </div>
      <AvatarRow></AvatarRow>
      <p>
        The 3 Genesis Elements are currently at in a war of control over their previous resources against the attacking Fire Element
      </p>
      <img id='fire' src={Fire}></img>
      <p>Why are the most beautiful things always the most destructive...</p>
    </div>
  );
};

export default BlackElements;