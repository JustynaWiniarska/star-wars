import React from 'react';
import Character from '../Character/Character';

const People = ({characters}) => {

console.log('characters', characters)
  let list = characters.map((obj, i) => {
console.log('obj', obj)
    return <Character key={i} {...obj} /> })
console.log('list', list)

  return (
    <div>
      <h2>characters</h2>
      {list}
    </div>
  )
}

export default People;
