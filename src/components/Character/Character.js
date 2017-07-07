import React from 'react';

const Character = ({name, homeworld, species, population}) => {


  return (
    <div>
      <p>{name}</p>
      <p>{homeworld}</p>

    </div>
  )
}

export default Character;
