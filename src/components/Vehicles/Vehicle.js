import React from 'react';

const Vehicle = ({name, model, vehicle_class, passengers}) => {

  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Class: {vehicle_class}</p>
      <p>Number of Passengers: {passengers}</p>
    </div>
  )
}

export default Vehicle;
