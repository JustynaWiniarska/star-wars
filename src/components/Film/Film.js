import React from 'react';
import './Film.css'

const Film = ({film}) => {

  return (
    <div className='scrolling-text'>
      <div className='scrolling-text-container'>
        <p>{film.crawl}</p>
        <p>{film.title}</p>
        <p>{film.date}</p>
      </div>
    </div>
  )
}

export default Film;
