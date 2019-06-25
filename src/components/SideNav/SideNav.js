import React from 'react';
import NavItem from '../NavItem/NavItem';

const sideNav = props => (
  <>
    <nav className='side-nav'>
      <span className='main-nav-item'>
        <NavItem src='https://trello.com' navName='Boards' />
      </span>
      <NavItem src='https://trello.com' navName='Home' />
      <NavItem src='https://trello.com' navName='Teams' />
    </nav>
  </>
);

export default sideNav;
