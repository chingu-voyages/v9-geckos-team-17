import React from 'react';

const navItem = (props) =>(
  <div className='nav-item'>
    <a href={props.src} className={props.className}> <span className='side-nav-icon'>{props.icon}</span>{props.navName}</a>
  </div>
)

export default navItem