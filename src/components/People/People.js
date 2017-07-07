import React from 'react';
import Character from './Character';

const People = ({characters}) => {

  let list = characters.map((obj, i) => {

    return <Character key={i} {...obj} /> })

  return (
    <div>
      <h2>characters</h2>
      {list}
    </div>
  )
}

export default People;
