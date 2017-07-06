import React from 'react';
import './Film.css'

const Film = ({film}) => {

  return (
    <div className='scrolling-text'>
        <p>{film.crawl}</p>
        <p>{film.title}</p>
        <p>{film.date}</p>
    </div>
  )
}

export default Film;
