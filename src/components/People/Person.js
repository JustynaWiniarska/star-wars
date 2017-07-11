import React from 'react';

const Person = ({name, homeworld, species, population}) => {


  return (
    <div className='card'>
      <div className='card-header'>
        <h3>{name}</h3>
        <button className='fav-btn'>
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
