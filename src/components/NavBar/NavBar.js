import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='navigation'>
      <NavLink to='/people'>characters</NavLink>
      <NavLink to='/planets'>planets</NavLink>
      <NavLink to='/vehicles'>vehicles</NavLink>
    </div>
  )
}

export default NavBar;
