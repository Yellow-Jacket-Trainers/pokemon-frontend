import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

class Header extends React.Component {
  render() {

    return ( 
    <>
       {this.props.auth0.isAuthenticated
          ?
          <LogoutButton />
          : <LoginButton />
      } 

      < Navbar expand = "xxl" bg = "info" variant = "dark" 
       breakpoints={['xxxl']}
       >
         
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/main" href="/Pokemon.js" className="nav-link">Collection</Link>
          </NavItem>
          <NavItem>
            <Link to="/about" href="/About.js" className="nav-link">About</Link>
          </NavItem>

      </Navbar >
</>
    )
  }
}

// export default withAuth0(Header);
export default withAuth0(Header);
