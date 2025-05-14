import React, { useContext, useState } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Images = () => {

   const {imageData} = useContext(PixabayContext);
  return (

    <div className="container">
    <div className='flex'>
     {imageData.map((image) => (<div key={image.id}>
       <div className="item">
        <img src={image.largeImageURL} alt="Loading...." />
       </div>
     </div>))}
    </div>
    </div>
  );
};

export default Images