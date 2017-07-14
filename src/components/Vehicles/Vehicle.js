import React from 'react';

const Vehicle = ({name, model, vehicle_class, passengers, handleFavorites, favorites }) => {

  const vehicleData = {
    name: name,
    model: model,
    class: vehicle_class,
    passengers: passengers
  }

  const favoritesArray = favorites.map(obj => {
    return obj.name
  })

  return (
    <div className={favoritesArray.includes(name) ? 'card favorited' : 'card'} >
      <div className='card-header'>
        <h3>{name}</h3>
        <button className='fav-btn'
          onClick={() => handleFavorites(vehicleData)}
        >
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
