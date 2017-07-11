import React from 'react';

const Planet = ({ name, terrain, population, climate, residents }) => {

  return (
    <div className='card'>
      <div className='card-header'>
        <h3>{name}</h3>
        <button className='fav-btn'>
        <img src={require('../Main/star.png')} className='fav-star' alt='favorite' />
        </button>
      </div>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
      <p>Climate: {climate}</p>
      <p>Residents: {residents}</p>
    </div>
  )
}

export default Planet;
