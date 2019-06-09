import React, { Component } from 'react';

export class index extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <button>
                  <a className='nav-link' href='#'>
                    <i class='fas fa-home' />
                  </a>
                </button>
              </li>
              <li className='nav-item'>
                <button>
                  <a className='nav-link' href='#'>
                    <i class='fab fa-trello' />
                    Boards
                  </a>
                </button>
              </li>
              <li>
                <form className='form-inline my-2 my-lg-0'>
                  <input
                    className='form-control mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <button
                    className='btn btn-outline-success my-2 my-sm-0'
                    type='submit'
                  >
                    Search
                  </button>
                </form>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Dropdown
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                  <div className='dropdown-divider' />
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
              <li>
                <a className='navbar-brand' href='#'>
                  <i class='fab fa-trello' />
                  Trello
                </a>
              </li>
              <li className='nav-item'>
                <button>
                  <a className='nav-link create' href='#'>
                    <i class='fas fa-plus' />
                  </a>
                </button>
              </li>
              <li className='nav-item'>
                <button>
                  <a className='nav-link info' href='#'>
                    <i class='fas fa-info-circle' />
                  </a>
                </button>
              </li>
              <li className='nav-item'>
                <button>
                  <a className='nav-link notifications' href='#'>
                    <i class='far fa-bell' />
                  </a>
                </button>
              </li>
              <li className='nav-item'>
                <button>
                  <a className='nav-link user' href='#'>
                    <i class='far fa-user' />
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default index;
