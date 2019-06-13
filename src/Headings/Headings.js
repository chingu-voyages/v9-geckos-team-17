import React from 'react'
const headings = (props) =>(
  <div className='headings'>
    <p><span className='heading-icon icon'> {props.icon}</span>{props.heading}</p>
  </div>
)

export default headings