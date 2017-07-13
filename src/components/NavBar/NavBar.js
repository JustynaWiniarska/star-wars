import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

  return (
    <nav className='navigation'>
      <NavLink className='link' to='/people' activeClassName='active'>characters</NavLink>
      <NavLink className='link' to='/planets' activeClassName='active'>planets</NavLink>
      <NavLink className='link' to='/vehicles' activeClassName='active'>vehicles</NavLink>
    </nav>
  )
}

export default NavBar;
