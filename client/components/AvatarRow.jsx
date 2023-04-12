import React from "react";
import { useInView, animated } from '@react-spring/web';
import IceAv from "../../images/Ice_Av.png"
import WaterAv from "../../images/Water_Av.png"
import LeafAv from "../../images/Leaf_Av.png"

const AvatarRow = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-30% 0%',
    }
  )

  return (
    <div id='avatar-row'>
      <div></div>
      <animated.img id='avatar-leaf' src={LeafAv} ref={ref} style={springs}></animated.img>
      <animated.img id='avatar-water' src={WaterAv} ref={ref} style={springs}></animated.img>
      <animated.img id='avatar-ice' src={IceAv} ref={ref} style={springs}></animated.img>
      <p>Genesis Avatars will also act as an access point into the Send Collective Community Look out for any traits that relate to your favorite full send moments</p>
    </div>
  );
};

export default AvatarRow;