import React, { useEffect, useRef, useState } from "react";
import logo from '../../images/Logo_Shield.png'
import { useFilterContext } from "../contexts/FilterContext";

const Box = ({ data }) => {
  const [image, setImage] = useState(logo)
  const imageRef = useRef();
  const filters = useFilterContext().filters
  const [isVisible, setIsVisible] = useState(true)

  const dynamicImport = () => {
    import(`./test_avatars/avatar_${data.id}.png`)
      .then(image => {
        setImage(image.default)
      })
      .catch(e => {
        console.log('error with dynamic import of image')
        console.log(e)
      })
  }

  useEffect(() => {
    if (!imageRef?.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        dynamicImport()
      }
    },
    {
      rootMargin: '150px'
    }
    );

    observer.observe(imageRef.current);
  }, [imageRef, filters])

  const checkFilters = () => {
    // console.log(filters)
    const layers = Object.keys(filters)
    // console.log(layers)
    for (const layer of layers) {
      if (Object.values(filters[layer]).some((el) => el)) {
        // console.log('Layer:', layer, 'has at least one true??')
        if (!data[layer]) return false
        if (filters[layer][data[layer]] === false) {
          return false
        }
      }
    }
    return true;
  }

  useEffect(() => {
    if(!checkFilters()) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [filters])

  if (!isVisible) return;
  return (
    <div className="box" onClick={dynamicImport}>
      <img ref={imageRef} src={image} alt="" className="box-img"></img>
      <div className="box-id">
        ID: {data.id}
      </div>
    </div>
  );
};

export default Box;