import React from "react";
import { useInView, a } from '@react-spring/web';

const Ocean = () => {

  const [refTitle, springsTitle] = useInView(
    () => ({
      config: {
        duration: 400,
      },
      from: {
        scale: 0,
        color: '#36BDDB',
      },
      to: {
        scale: 1,
        color: 'white'
      },
    }),
    {
      rootMargin: '-25% 0%',
      once: true
    }
  )

  const [ref, springs] = useInView(
    () => ({
      config: {
        duration: 600,
      },
      from: {
        scale: 0,
      },
      to: {
        scale: 1,
      },
    }),
    {
      rootMargin: '-25% 0%',
      once: true
    }
  )

  return (
    <div>
      <div id='ocean-title'>
        <a.h1 ref={refTitle} style={springsTitle}>JOIN THE SEND COLLECTIVE!</a.h1>
      </div>
      <div id='ocean-text'>
        <a.h4 ref={ref} style={springs}>
          ART x LORE
          Our Mission is to use art and storytelling 
          to create a visual component to the Full 
          Send Web 3 Timeline.
        </a.h4>
        <a.h4 ref={ref} style={springs}>
          Empower Community:
          Our first and foremost priority
          is community. We value community
          feedback from you guys and want 
          to serve as a Web 3 extension
          of the Full Send Community. We also
          understand the investment into
          metacards and plan on adding value 
          to them every step of the way.
        </a.h4>
        <a.h4 ref={ref} style={springs}>
          Further Brand:
          We want to utilize the 
          power of the community by
          creating a funnel to contribute
          towards creation, reach, branding
          while rewarding users for 
          participation
        </a.h4>
      </div>
    </div>
  );
};

export default Ocean;