import React from "react";
import { useInView, a } from '@react-spring/web';
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

  const [refRight, springsRight] = useInView(
    () => ({
      config: {
        duration: 400,
      },
      from: {
        opacity: 0,
        x: 140,
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
    <div id='avatar-row'>
      <div></div>
      <a.img id='avatar-leaf' src={LeafAv} ref={ref} style={springs}></a.img>
      <a.img id='avatar-water' src={WaterAv} ref={ref} style={springs}></a.img>
      <a.img id='avatar-ice' src={IceAv} ref={ref} style={springs}></a.img>
      <a.p ref={refRight} style={springsRight}>
        Genesis Avatars will also act as an access point into the Send Collective Community Look out for any traits that relate to your favorite full send moments
      </a.p>
    </div>
  );
};

export default AvatarRow;