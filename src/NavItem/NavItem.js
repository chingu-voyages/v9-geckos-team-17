import React from 'react';

const navItem = (props) =>(
  <div className='nav-item'>
    <a href={props.src}>{props.icon}{props.navName}</a>
  </div>
)

export default navItem