import React, { useEffect, useState } from "react";
import Box from "../components/Box";

const BoxesMain = () => {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    for (let i = 0; i < 201; i++){
      console.log('i is')
      console.log(i)
      let filename = 'metadata_'
      let zFill = ('0000' + i).slice(-4);
      filename += zFill
      import(`./test_metadata/${filename}.json`)
        .then(module => module.default)
        .then(data => {
          console.log('import success')
          setBoxes(prevState => {
            const newState = [...prevState]
            newState.push(<Box data={data}></Box>)
            return newState
          })
        })
        .catch(e => {
          console.log('error with dynanmic import')
          console.log(e)
        })
    }
  }, [])
  

  return (
    <div id="boxes-main">
      {boxes}
    </div>
  );
};

export default BoxesMain;