import React from 'react';
import Planet from './Planet';

const Planets = ({ planetList, handleFavorites }) => {
// console.log('planetList', planetList)
  const planets = planetList.map((planet, i) => {

      return <Planet key={i} {...planet} handleFavorites={handleFavorites} />
  })

  return(
    <div>
      <h2>planets</h2>
      {planets}
    </div>
  )
}

export default Planets;
