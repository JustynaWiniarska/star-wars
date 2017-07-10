import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='navigation'>
      <NavLink to='/people' activeClassName='selected'>characters</NavLink>
      <NavLink to='/planets' activeClassName='selected'>planets</NavLink>
      <NavLink to='/vehicles' activeClassName='selected'>vehicles</NavLink>
    </div>
  )
}

export default NavBar;
