import React from 'react';
import Character from '../Character/Character';

const People = ({characters}) => {
console.log('characters:', characters)
  const list = characters.map((person, i) => {

    <Character key={i} {...person} />
  });
  return (
    <div>
      {list}
    </div>
  )
}

export default People;
