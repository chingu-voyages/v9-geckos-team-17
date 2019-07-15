import React from 'react';

const navItem = (props) =>(
  <div className='navi-item'>
    <a href={props.src} className={props.className}>{props.icon}{props.navName}</a>
  </div>
)

export default navItem