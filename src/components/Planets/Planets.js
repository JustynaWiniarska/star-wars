import React from 'react';
import Planet from './Planet';

const Planets = ({ planetList, handleFavorites }) => {

  const planets = planetList.map((planet, i) => {

    return <Planet key={i} {...planet} handleFavorites={handleFavorites} />
  })

  if(!planetList.length) {
    return (
      <div>
        <h2>planets</h2>
        <div className='card-grid'>
          <p className='loading'>Loading......</p>
        </div>
      </div>
    )
  }

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
