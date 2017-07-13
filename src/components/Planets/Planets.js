import React from 'react';
import Planet from './Planet';

const Planets = ({ planetList, handleFavorites }) => {
// console.log('planetList', planetList)
  const planets = planetList.map((planet, i) => {
console.log('planet', planet)
      return <Planet key={i} {...planet} handleFavorites={handleFavorites} />
  })

  return(
    <div>
      <h2>planets</h2>
      <div className='card-grid'>
        {planets}
      </div>
    </div>
  )
}

export default Planets;
