import React from 'react';
import NavItem from '../NavItem/NavItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import {  faPlus, faSignature,} from '@fortawesome/free-solid-svg-icons'

const sideNav = (props) =>(
  <>
    <nav className="side-nav">
       <span className='main-nav-item board-nav'> 
         {/* <NavItem src ='https://trello.com' navName= 'Boards' icon={<FontAwesomeIcon icon={faTrello} />}/> */}
        
              
                  <a
                    className='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fab fa-trello icon' /> Boards
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <a className='dropdown-item' href='#'>
                      <form className='form-inline my-2 my-lg-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='search'
                          placeholder='Find boards by name...'
                          aria-label='Search'
                        />
                        <button className='btn btn-outline-dark' type='submit'>
                          <i class='fas fa-search' />
                        </button>
                      </form>
                    </a>
                    <a className='dropdown-item' href='#'>
                      <h6>Create Team...</h6>
                      <p>
                        A team is a group of boards and people. Use it to
                        organize your company, side hustle, family, or friends.
                      </p>
                    </a>
                    <a className='dropdown-item' href='#'>
                      <h6>Create Business Team...</h6>
                      <p>
                        With Business Class your team has more security,
                        administrative controls, and unlimited Power-Ups.
                      </p>
                    </a>
                  </div>
                
            
       </span>
       <NavItem src ='#' className ='active home' navName= 'Home' icon={<FontAwesomeIcon icon={faSignature} />}/>
       <NavItem src ='https://trello.com' navName= 'Teams'icon={<FontAwesomeIcon icon={faPlus} />}/>
    </nav>
  </>
)

export default sideNav;
