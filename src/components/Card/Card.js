import React from 'react';
const card = props => (
  <div className='card'>
    <a href={props.src} className={props.className}>
      {' '}
      {props.cardName}
    </a>
  </div>
);

export default card;
