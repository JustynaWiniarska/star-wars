import React from 'react';
import Person from './Person';

const People = ({peopleList}) => {

  const list = peopleList.map((obj, i) => {

    return <Person key={i} {...obj} /> })

  return (
    <div>
      <h2>characters</h2>
      {list}
    </div>
  )
}

export default People;
