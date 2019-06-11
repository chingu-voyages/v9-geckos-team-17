import React, { Component } from 'react';
import './style.css';

export class index extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active home'>
                <button>
                  <a className='nav-link' href='#'>
                    <i className='fas fa-home' />
                  </a>
                </button>
              </li>
              <li className='nav-item dropdown boards'>
                <button>
                  <a
                    className='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fab fa-trello' /> Boards
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
                        <button
                          className='btn btn-outline-dark my-2 my-sm-0'
                          type='submit'
                        >
                          Search
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
                </button>
              </li>
              <li className='search'>
                <form className='form-inline my-2 my-lg-0'>
                  <input
                    className='form-control mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <button
                    className='btn btn-outline-dark my-2 my-sm-0'
                    type='submit'
                  >
                    <i class='fas fa-search' />
                  </button>
                </form>
              </li>
              <li className='trello'>
                <a className='navbar-brand' href='#'>
                  <i className='fab fa-trello' /> Trello
                </a>
              </li>
              <li className='nav-item dropdown create'>
                <button>
                  <a
                    className='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-plus' />
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <h6> Create</h6>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='#'>
                      <h6>Create Board...</h6>
                      <p>
                        A board is made up of cards ordered on lists. Use it to
                        manage projects, track information, or organize
                        anything.
                      </p>
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
                </button>
              </li>
              <li className='nav-item dropdown info'>
                <button>
                  <a
                    className='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-info-circle' />
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <h6>Information</h6>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </button>
              </li>
              <li className='nav-item dropdown notifications'>
                <button>
                  <a
                    className='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='far fa-bell' />
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <h6>Notifications</h6>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </button>
              </li>
              <li className='nav-item dropdown user'>
                <button>
                  <a
                    className='nav-link'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='far fa-user' />
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <h6>User</h6>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='#'>
                      Profile
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a className='dropdown-item' href='#'>
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
