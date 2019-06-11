import React from 'react'
const card = (props) =>(
  <div className="card">
    <a href={props.src}> {props.cardName}</a>
  </div>
)

export default card