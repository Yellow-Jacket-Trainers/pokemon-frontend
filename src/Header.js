import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import HeaderCSS from './Header.module.css'

class Header extends React.Component {
  render() {

    return (
      <>
        <div className="log-btn">
          {this.props.auth0.isAuthenticated
            ?
            <LogoutButton />
            : <LoginButton />
          }
        </div>

        <div className="nav-bar">
          < Navbar collapseOnSelect expand="lg" bg="info" variant="light" >

            <Navbar.Brand>Pokedeck</Navbar.Brand>
            <NavItem>
              <Link to="/" className="nav-link-Home">Home</Link>
            </NavItem>

            <NavItem>
              <Link to="/about" href="/About.js" className="nav-link-About">About</Link>
            </NavItem>

          </Navbar >
        </div>
      </>
    )
  }
}

// export default withAuth0(Header);
export default withAuth0(Header);
