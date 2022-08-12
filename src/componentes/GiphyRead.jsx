import React from "react";
import GifGridImage from "./GiftGridImage";
import { getGifs } from "./helpers/GetGifs";

const GiphyRead = ({ category }) => {
   const [images, setImages] = React.useState([]);

   React.useEffect(() => {
     getGifs( category )
     .then(img => setImages( img ))
   }, [ category]);

  return (
     <>
       <h3>{category}</h3>
      
         {
         images.map( img => (
           <GifGridImage img={ img }
           key={ img.id }
           {...img}
           />
         ))
         }
    
     </>
  );
};

export default GiphyRead;
