import React from 'react';

const Vehicle = ({name, model, vehicle_class, passengers}) => {

  return (
    <div className='card'>
      <div className='card-header'>
        <h3>{name}</h3>
        <button className='fav-btn'>
        <img src={require('../Main/star.png')} className='fav-star' alt='favorite' />
        </button>
      </div>
      <div className='p-container'>
        <p>Model: {model}</p>
        <p>Class: {vehicle_class}</p>
        <p>Number of Passengers: {passengers}</p>
      </div>
    </div>
  )
}

export default Vehicle;
