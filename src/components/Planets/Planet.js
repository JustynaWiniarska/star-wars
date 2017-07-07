import React from 'react';

const Planet = ({ name, terrain, population, climate, residents }) => {

  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
      <p>Climate: {climate}</p>
    </div>
  )
}

export default Planet;
