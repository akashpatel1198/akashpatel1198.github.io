import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Horizontal = () => {
  const parallax = useRef(null)

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <div id="container">
      <Parallax id="parallax" innerStyle={styles} ref={parallax} pages={4} horizontal>
        <ParallaxLayer offset={0}>
          <h1>Element</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <h1>Element</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <h1>Element</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <h1>Element</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

const styles = {
  innerHeight: "100px",
  backgroundColor: "white"
}

export default Horizontal;