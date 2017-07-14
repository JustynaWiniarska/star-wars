import React from 'react';
import Person from './Person';

const People = ({ peopleList, handleFavorites, favorites }) => {
  const list = peopleList.map((obj, i) => {

    return <Person key={i} id={obj.created} {...obj} handleFavorites={handleFavorites} favorites={favorites}/>
  })

  if(!peopleList.length) {
    return (
      <div>
        <h2>characters</h2>
        <div className='card-grid'>
          <p className='loading'>Loading......</p>
        </div>
      </div>
    )
  }

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
