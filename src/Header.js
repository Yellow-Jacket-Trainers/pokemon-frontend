import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { withAuth0 } from '@auth0/auth0-react';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {

    return ( 
    <>
      {/* {this.props.auth0.isAuthenticated
          ?
          <LogoutButton />
          : <LoginButton />
      } */}

      < Navbar collapseOnSelect expand = "lg" bg = "info" variant = "dark" >
       
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>

          <NavItem>
            <Link to="/about" href="/About.js" className="nav-link">About</Link>
          </NavItem>
        
    {/* PLACEHOLDER: render a navigation link to the about page */ }
      </Navbar >
</>
    )
  }
}

// export default withAuth0(Header);
export default Header;
