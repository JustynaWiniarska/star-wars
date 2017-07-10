import React from 'react';
import './Person.css'

const Person = ({name, homeworld, species, population}) => {


  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>Homeworld: {homeworld}</p>
      <p>Species: {species}</p>
      <p>Population: {population}</p>
      <button>Favorite</button>
    </div>
  )
}

export default Person;
