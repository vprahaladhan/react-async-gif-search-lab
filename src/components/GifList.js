import React from 'react';

const GifList = ({ listOfGifs }) => (
  <ul>
    {listOfGifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt={gif.id} /></li>)}
  </ul>
 );

 export default GifList;