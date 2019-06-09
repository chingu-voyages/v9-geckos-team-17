import React, { Component } from 'react';
import './style.css';

export class index extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
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
                    <i class='fab fa-trello' /> Boards
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
              {/* <li class='nav-item dropdown'>
                <button>
                  <a
                    class='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Dropdown
                  </a>
                  <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <a class='dropdown-item' href='#'>
                      Action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Another action
                    </a>
                    <div class='dropdown-divider' />
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </button>
              </li> */}
              <li>
                <a className='navbar-brand' href='#'>
                  <i class='fab fa-trello' /> Trello
                </a>
              </li>
              <li class='nav-item dropdown'>
                <button>
                  <a
                    class='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i class='fas fa-plus' />
                  </a>
                  <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <h6> Create</h6>
                    <div class='dropdown-divider' />
                    <a class='dropdown-item' href='#'>
                      <h6>Create Board...</h6>
                      <p>
                        A board is made up of cards ordered on lists. Use it to
                        manage projects, track information, or organize
                        anything.
                      </p>
                    </a>
                    <a class='dropdown-item' href='#'>
                      <h6>Create Team...</h6>
                      <p>
                        A team is a group of boards and people. Use it to
                        organize your company, side hustle, family, or friends.
                      </p>
                    </a>
                    <a class='dropdown-item' href='#'>
                      <h6>Create Business Team...</h6>
                      <p>
                        With Business Class your team has more security,
                        administrative controls, and unlimited Power-Ups.
                      </p>
                    </a>
                  </div>
                </button>
              </li>
              <li class='nav-item dropdown'>
                <button>
                  <a
                    class='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i class='fas fa-info-circle' />
                  </a>
                  <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <h6>Information</h6>
                    <div class='dropdown-divider' />
                    <a class='dropdown-item' href='#'>
                      Action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </button>
              </li>
              <li class='nav-item dropdown'>
                <button>
                  <a
                    class='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i class='far fa-bell' />
                  </a>
                  <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <h6>Notifications</h6>
                    <div class='dropdown-divider' />
                    <a class='dropdown-item' href='#'>
                      Action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </button>
              </li>
              <li class='nav-item dropdown'>
                <button>
                  <a
                    class='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i class='far fa-user' />
                  </a>
                  <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <h6>User</h6>
                    <div class='dropdown-divider' />
                    <a class='dropdown-item' href='#'>
                      Profile
                    </a>
                    <a class='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
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
