import React from 'react';
import Vehicle from './Vehicle'

const Vehicles = ({ vehicleList, handleFavorites }) => {

  let vehicles = vehicleList.map((vehicle, i) => {
//running through vehicleList 3 times

  // console.log('vehicle', vehicle)
    return <Vehicle key={i} {...vehicle} handleFavorites={handleFavorites} />
  })

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
