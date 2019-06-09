import React from 'react';
import NavItem from '../NavItem/NavItem'

const sideNav = (props) =>(
  <div>
    <nav>
      <a href="https://trello.com">
        <NavItem navName= 'Boards'/>
      </a>
      <a href="https://trello.com">
        <NavItem navName= 'Home'/>
      </a>
      <a href="https://trello.com">
        <NavItem navName= 'Teams'/>
      </a>
    </nav>
  </div>
)

export default sideNav;