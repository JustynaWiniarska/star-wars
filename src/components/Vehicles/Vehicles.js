import React from 'react';
import Vehicle from './Vehicle'

const Vehicles = ({ vehicleList, handleFavorites, favorites }) => {

  let vehicles = vehicleList.map((vehicle, i) => {
//running through vehicleList 3 times

    return <Vehicle key={i} {...vehicle} handleFavorites={handleFavorites} favorites={favorites} />
  })

  if(!vehicleList.length) {
    return (
      <div>
        <h2>vehicles</h2>
        <div className='card-grid'>
          <p className='loading'>Loading......</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>vehicles</h2>
      <div className='card-grid'>
        {vehicles}
      </div>
    </div>
  )
}

export default Vehicles;
