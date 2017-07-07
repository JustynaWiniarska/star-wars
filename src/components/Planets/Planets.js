import React from 'react';
import Planet from './Planet';

const Planets = ({ planetList }) => {

  let planets = planetList.map((planet, i) => {
  
      return <Planet key={i} {...planet} />
  })

  return(
    <div>
      <h2>planets</h2>
      {planets}
    </div>
  )
}

export default Planets;
