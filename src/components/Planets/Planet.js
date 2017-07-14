import React from 'react';

const Planet = ({ name, terrain, population, climate, residents, handleFavorites, favorites }) => {

  const planetData = {
    name: name,
    terrain: terrain,
    population: population,
    climate: climate,
    residents: residents
  }

  const favoritesArray = favorites.map(obj => {
    return obj.name
  })

  return (
    <div className={favoritesArray.includes(name) ? 'card favorited' : 'card'} >
      <div className='card-header'>
        <h3>{name}</h3>
        <button className='fav-btn'
          onClick={() => handleFavorites(planetData)}
        >
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
