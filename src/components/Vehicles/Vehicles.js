import React from 'react';
import Vehicle from './Vehicle'

const Vehicles = ({ vehicleList }) => {

  let vehicles = vehicleList.map((vehicle, i) => {
//running through vehicleList 3 times

  console.log('vehicle', vehicle)
    return <Vehicle key={i} {...vehicle} />
  })

  return (
    <div>
      <h2>vehicles</h2>
      {vehicles}
    </div>
  )
}

export default Vehicles;
