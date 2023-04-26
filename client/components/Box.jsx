import React, { useEffect, useState } from "react";
import testAv from './test_avatars/avatar_0000.png'

const Box = ({ data }) => {

  let source = null;
  const [image, setImage] = useState('')

  useEffect(() => {
    import(`./test_avatars/avatar_${data.id}.png`)
      // .then(module => module.default)
      .then(image => {
        console.log('in promise chain of image')
        setImage(image.default)
      })
      .catch(e => {
        console.log('error with dynamic import of image')
        console.log(e)
      })
  }, [])

  return (
    <div className="box">
      <img src={image} alt="" className="box-img" loading="lazy"></img>
      <div className="box-id">
        ID: {data.id}
      </div>
    </div>
  );
};

export default Box;