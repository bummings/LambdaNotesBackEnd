import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className='sideBar'>
        <h1 className='sideBar__headline'>
          Edd's
          <br />
          Notes
        </h1>
        <div className='link-section'>
          {/* <NavLink exact to="/" activeClassName="link">
            <button class="btn">View Your Notes</button>
          </NavLink>
          <br />
          <NavLink to="/submit" activeClassName="link">
            <button class="btn">+ Create New Note</button>
          </NavLink> */}

          <Link className='nav__btn' to={`/`}>
            View Your Notes
          </Link>

          <Link className='nav__btn' to={`/submit`}>
            Create New Note
          </Link>
          <div className='auth__btn--container'>
            <Link className='auth__btn' to={`/SignIn`}>
              Sign In
            </Link>

            <Link className='auth__btn' to={`/SignUp`}>
              Sign Up
            </Link>
          </div>
          {/* <a className="nav__btn" href="/">
            View Your Notes
          </a> */}

          {/* <a className="nav__btn" href="/submit">
            Create New Note
          </a> */}
        </div>
      </div>
    );
  }
}

export default Nav;
