import React from 'react';
import Person from './Person';

const People = ({ peopleList, handleFavorites }) => {

  const list = peopleList.map((obj, i) => {

    return <Person key={i} id={obj.created} {...obj} handleFavorites={handleFavorites} /> })

  return (
    <div>
      <h2>characters</h2>
      <div className='card-grid'>
        {list}
      </div>
    </div>
  )
}

export default People;
