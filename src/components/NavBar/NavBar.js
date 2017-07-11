import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

  return (
    <div className='navigation'>
      <NavLink className='link' to='/people' activeClassName='selected'>characters</NavLink>
      <NavLink className='link' to='/planets' activeClassName='selected'>planets</NavLink>
      <NavLink className='link' to='/vehicles' activeClassName='selected'>vehicles</NavLink>
    </div>
  )
}

export default NavBar;
