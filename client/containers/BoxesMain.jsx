import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Box from "../components/Box";

const BoxesMain = () => {
  const [boxes, setBoxes] = useState([]);
  const [items, setItems] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    for (let i = 0; i < 201; i++){
      let filename = 'metadata_'
      let zFill = ('0000' + i).slice(-4);
      filename += zFill
      import(`./test_metadata/${filename}.json`)
        .then(module => module.default)
        .then(data => {
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
  
  const moreData = () => {
    if (items > boxes.length) {
      setHasMore(false)
      return;
    }
    setTimeout(() => {
      setItems(items + 20);
    }, 500)

  }

  return (
    <InfiniteScroll className="boxes-main"
    dataLength={items}
    next={moreData}
    hasMore={hasMore}
    loader={<p>Loading...</p>}
    >
      {boxes.filter((item, index) => {
        // console.log('in boxes filter')
        // console.log(item.props)
        if (index < items) return true;
        return false
      })}
    </InfiniteScroll>
  );

  // return (
  //   <div id="boxes-main">
  //     {boxes}
  //   </div>
  // );
};

export default BoxesMain;