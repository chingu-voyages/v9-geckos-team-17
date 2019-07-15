import React from 'react';
import NavItem from '../NavItem/NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import {  faPlus, faSignature,} from '@fortawesome/free-solid-svg-icons'

const sideNav = (props) =>(
  <>
    <nav className="side-nav">
       <span className='main-nav-item'><NavItem src ='https://trello.com' navName= 'Boards' icon={<FontAwesomeIcon icon={faTrello} />}/></span>
       <NavItem src ='https://trello.com' navName= 'Home' icon={<FontAwesomeIcon icon={faSignature} />}/>
       <NavItem src ='https://trello.com' navName= 'Teams'icon={<FontAwesomeIcon icon={faPlus} />}/>
    </nav>
  </>
)

export default sideNav;