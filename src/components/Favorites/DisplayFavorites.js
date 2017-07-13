import React from 'react';

const DisplayFavorites = ({ favorites, handleFavorites }) => {

console.log('favorites', favorites)

  if(favorites) {
    const FavoriteCards = favorites.map((card, index) => {

    //people cards:
      if(card.species) {

        const personData = {
          name: card.name,
          homeworld: card.homeworld,
          species: card.species,
          population: card.population
        }

        return (
          <div className='card' key={index}>
            <div className='card-header'>
              <h3>{card.name}</h3>
              <button className='fav-btn'
                onClick={() => handleFavorites(personData)}
              >
              <img src={require('../Main/star.png')} className='fav-star' alt='favorite' />
              </button>
            </div>
            <p>Homeworld: {card.homeworld}</p>
            <p>Species: {card.species}</p>
            <p>Population: {card.population}</p>
          </div>
        )
      }

    // planet cards
      else if(card.terrain) {

        const planetData = {
          name: card.name,
          terrain: card.terrain,
          population: card.population,
          climate: card.climate,
          residents: card.residents
        }

        return (
          <div className='card' key={index}>
            <div className='card-header'>
              <h3>{card.name}</h3>
              <button className='fav-btn'
                onClick={() => handleFavorites(planetData)}
              >
              <img src={require('../Main/star.png')} className='fav-star' alt='favorite' />
              </button>
            </div>
            <p>Terrain: {card.terrain}</p>
            <p>Population: {card.population}</p>
            <p>Climate: {card.climate}</p>
            <p>Residents: {card.residents}</p>
          </div>
        )
      }

    // vehicle cards
      else if (card.vehicle_class) {

        const vehicleData = {
          name: card.name,
          model: card.model,
          class: card.vehicle_class,
          passengers: card.passengers
        }

        return (
          <div className='card' key={index}>
            <div className='card-header'>
              <h3>{card.name}</h3>
              <button className='fav-btn'
                onClick={() => handleFavorites(vehicleData)}
              >
              <img src={require('../Main/star.png')} className='fav-star' alt='favorite' />
              </button>
            </div>
            <div className='p-container'>
              <p>Model: {card.model}</p>
              <p>Class: {card.vehicle_class}</p>
              <p>Number of Passengers: {card.passengers}</p>
            </div>
          </div>
        )
      }
    })

    return (
      <div className='favorites'>
          <h2>Favorites</h2>
          {FavoriteCards}
      </div>
    )
  }

  // if (!favorites) {
  //   return (
  //     <div className='favorites'>
  //         <h2>Favorites</h2>
  //         <p>There are no favorites to display.</p>
  //
  //     </div>
  //   )
  // }

}

export default DisplayFavorites;
