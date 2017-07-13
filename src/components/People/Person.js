import React from 'react';

const Person = ({ name, homeworld, species, population, handleFavorites }) => {

  const personData = {
    name: name,
    homeworld: homeworld,
    species: species,
    population: population
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <h3>{name}</h3>
        <button className='fav-btn'
          onClick={() => handleFavorites(personData)}
        >
        <img src={require('../Main/star.png')} className='fav-star' alt='favorite' />
        </button>
      </div>
      <p>Homeworld: {homeworld}</p>
      <p>Species: {species}</p>
      <p>Population: {population}</p>
    </div>
  )
}

export default Person;
